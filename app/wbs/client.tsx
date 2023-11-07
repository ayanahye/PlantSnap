'use client'
import {deleteTask, updateTask} from '@/prisma/database'
import "./wbs.css"
import React, {useState} from "react";
import {task} from "@/app/wbs/page";

type lineTask = {
    i: number,
    text: string,
    st: number,
    ed: number
}

const kanban_step = ["Plan", "Design", "Implementation", "Beautify and Optimize", "Test and Deploy"]
const timeline_step = ["Plan", "Design", "Implementation", "Beautify and Optimize", "Test and Deploy"];
const milestone: lineTask[] = [
    {
        i: 0,
        text: "Plan and Design",
        st: 1,
        ed: 20
    },
    {
        i: 1,
        text: "Implement and Test",
        st: 20,
        ed: 38
    },
    {
        i: 2,
        text: "Deploy",
        st: 38,
        ed: 40
    }]
const empTask: task = {
    id: -1,
    step: "",
    order: 0,
    title: "",
    level: 0,
    assignd: null,
    esthour: null,
    acthour: null,
    completed: null,
    start: null,
    end: null
}
const levelClass = ["la", "lb", "lc"]
const color = [
    "#4fb5ff",
    "#4fdfff",
    "#4fff72",
    "#c4ff4f",
    "#fff04f",
    "#ff784f"]

export default function ClientPage(ctx: { tasks: task[] }) {
    const [curTask, setTask] = useState(empTask)
    const [showForm, setShowForm] = useState("")
    const [showMenu, setShowMenu] = useState({x: 0, y: 0, sh: ""})
    let days: { i: number, day: string }[] = []
    for (let i = 0; i < 39; i++) {
        days.push({i: i, day: String(19 + i > 31 ? -12 + i : 19 + i)})
    }

    function taskClick(event: React.MouseEvent<HTMLDivElement>, task: task) {
        event.stopPropagation()
        setTask(task)
        setShowForm("show")
    }

    function openMenu(event: React.MouseEvent<HTMLDivElement>, task: task) {
        event.preventDefault()
        setTask({...empTask, id: task.id, order: task.order + 0.01, step: task.step})
        setShowMenu({x: event.clientX, y: event.clientY, sh: "show"})
    }

    function openCreate(lv: number) {
        setTask({...curTask, level: lv, id: -1})
        setShowForm("show")
    }

    function deleteClick() {
        deleteTask(curTask.id)
    }

    return (
        <main onClick={() => setShowMenu({x: 0, y: 0, sh: ""})}>
            <div className="kanban">
                {kanban_step.map((step) => <div className="step-group" key={kanban_step.indexOf(step)}>
                    <div className="step">{step}</div>
                    {ctx.tasks.map(task => {
                        if (step != task.step) return null
                        return <div key={task.id}
                                    className={["task", task.completed ? "check" : "", levelClass[task.level]].join(" ")}
                                    onClick={(event) => taskClick(event, task)}
                                    onContextMenu={(event) => openMenu(event, task)}>
                            <div className="title">{task.title}</div>
                            {task.assignd &&
                                <>
                                    <div className="text-nowrap">Assign:<b>{task.assignd}</b></div>
                                    <div className="text-nowrap">Complete:<b>{task.completed}</b></div>
                                    <div className="time">{task.acthour}/{task.esthour}Hours</div>
                                </>}
                        </div>
                    })}
                </div>)}
            </div>
            <div className="timeline">
                {milestone.map(task => {
                    return <div key={task.i} style={{
                        gridColumnStart: task.st,
                        gridColumnEnd: task.ed,
                        backgroundColor: "#ccc"
                    }}>{task.text}
                    </div>;
                })}
                {days.map((day => {
                    return <div key={day.i} className="day">{day.day}</div>;
                }))}
                {timeline_step.map((step) =>
                    ctx.tasks.map(task => {
                        if (step != task.step || task.start == null || task.end == null) return null
                        return <div key={task.id}
                                    className={task.completed ? "check" : ""}
                                    style={{
                                        gridColumnStart: task.start,
                                        gridColumnEnd: task.end,
                                        backgroundColor: color[timeline_step.indexOf(task.step)]
                                    }}
                                    onClick={(event) => taskClick(event, task)}>
                            {task.title} <b>{task.completed ? task.completed : task.assignd}</b>
                        </div>
                    }))}
                {ctx.tasks.map(task => {
                    if ("Event" != task.step || task.start == null || task.end == null) return null
                    return <div key={task.id}
                                className={task.completed ? "check" : ""}
                                style={{
                                    gridColumnStart: task.start,
                                    gridColumnEnd: task.end,
                                    gridRow: 15,
                                    backgroundColor: color[5]
                                }}
                                onClick={(event) => taskClick(event, task)}>
                        {task.title} <b>{task.completed ? task.completed : task.assignd}</b>
                    </div>
                })}
            </div>
            <div className={"editform " + showForm}>
                <form action={updateTask} key={curTask.id}>
                    <h1 style={{gridColumnStart: 1, gridColumnEnd: 3}}>Create/Update task</h1>
                    <input type="hidden" defaultValue={curTask.id} name="id"/>
                    <input type="hidden" defaultValue={curTask.step} name="step"/>
                    <input type="hidden" defaultValue={curTask.order} name="order"/>

                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" defaultValue={curTask.title}/>

                    <label htmlFor="level">level</label>
                    <input type="number" name="level" id="level" defaultValue={curTask.level}/>

                    <label htmlFor="assignd">assigned to</label>
                    <input type="text" name="assignd" id="assignd"
                           defaultValue={curTask.assignd ? curTask.assignd : ""}/>

                    <label htmlFor="completed">completed by</label>
                    <input type="text" name="completed" id="completed"
                           defaultValue={curTask.completed ? curTask.completed : ""}/>

                    <label htmlFor="esthour">estimated hours</label>
                    <input type="text" name="esthour" id="esthour"
                           defaultValue={curTask.esthour ? curTask.esthour : ""}/>

                    <label htmlFor="acthour">actual hours</label>
                    <input type="text" name="acthour" id="acthour"
                           defaultValue={curTask.acthour ? curTask.acthour : ""}/>

                    <h1 style={{gridColumnStart: 1, gridColumnEnd: 3}}>Leave blank to not show on timeline</h1>
                    <label htmlFor="start">start day</label>
                    <input type="number" name="start" id="start" defaultValue={curTask.start ? curTask.start : ""}/>

                    <label htmlFor="end">end day</label>
                    <input type="number" name="end" id="end" defaultValue={curTask.end ? curTask.end : ""}/>

                    <button type="submit" style={{gridColumnStart: 1, gridColumnEnd: 3}}
                            onClick={() => {
                                setShowForm("")
                            }}>Save
                    </button>
                    <button type="reset" className="bg-danger" style={{gridColumnStart: 1, gridColumnEnd: 3}}
                            onClick={() => {
                                setShowForm("")
                                setTask(empTask)
                            }}>Cancel
                    </button>
                </form>
            </div>
            <div className={"menu " + showMenu.sh} style={{top: showMenu.y + "px", left: showMenu.x + "px"}}>
                <h1>add task under</h1>
                <div className="la" onClick={() => openCreate(0)}>add lv0 task</div>
                <div className="lb" onClick={() => openCreate(1)}>add lv1 task</div>
                <div className="lc" onClick={() => openCreate(2)}>add lv2 task</div>
                <div className="bg-danger" onClick={deleteClick}>delete task</div>
            </div>
        </main>
    )
}