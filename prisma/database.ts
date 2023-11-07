'use server'
import {PrismaClient} from '@prisma/client'
import {revalidatePath} from "next/cache";
import {task} from "@/app/wbs/page";

const prisma = new PrismaClient()

export async function getTasks(step: string): Promise<task[]> {
    return prisma.task.findMany({
        where: {
            show: true,
            step: step,
        },
        orderBy: {order: "asc"}
    });
}

export async function getAllTasks(): Promise<task[]> {
    return prisma.task.findMany({
        where: {
            show: true,
        },
        orderBy: {order: "asc"}
    });
}

function numOrNull(formData: FormData, name: string) {
    return <string>formData.get(name) == "" ? null : Number.parseFloat(<string>formData.get(name))
}

function strOrNull(formData: FormData, name: string) {
    return <string>formData.get(name) == "" ? null : <string>formData.get(name)
}

function num(formData: FormData, name: string) {
    return Number.parseInt(<string>formData.get(name))
}

function str(formData: FormData, name: string) {
    return <string>formData.get(name)
}

export async function updateTask(formData: FormData) {
    // console.dir(formData)
    let task: task = {
        id: num(formData, "id"),
        step: str(formData, "step"),
        order: num(formData, "order"),
        title: str(formData, "title"),
        level: num(formData, "level"),
        assignd: strOrNull(formData, "assignd"),
        esthour: numOrNull(formData, "esthour"),
        acthour: numOrNull(formData, "acthour"),
        completed: strOrNull(formData, "completed"),
        start: numOrNull(formData, "start"),
        end: numOrNull(formData, "end")
    }
    if (task.id == -1) {
        await prisma.task.create({
            data: {
                step: task.step,
                order: task.order,
                title: task.title,
                level: task.level,
                assignd: task.assignd,
                esthour: task.esthour,
                acthour: task.acthour,
                completed: task.completed,
                start: task.start,
                end: task.end,
            }
        })
    } else {
        await prisma.task.update({
            where: {id: task.id}, data: {
                step: task.step,
                order: task.order,
                title: task.title,
                level: task.level,
                assignd: task.assignd,
                esthour: task.esthour,
                acthour: task.acthour,
                completed: task.completed,
                start: task.start,
                end: task.end,
            }
        })
    }
    revalidatePath('/')
}

export async function deleteTask(id: number) {
    await prisma.task.update({
        where: {id: id}, data: {
            show: false,
        }
    })
    revalidatePath('/')
}