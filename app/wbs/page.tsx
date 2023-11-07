'use server'
import ClientPage from "@/app/wbs/client";
import {getAllTasks} from "@/prisma/database";

export type task = {
    id: number,
    step: string,
    order: number,
    title: string,
    level: number,
    assignd: string | null,
    esthour: number | null,
    acthour: number | null,
    completed: string | null,
    start: number | null,
    end: number | null
}


export default async function Page() {
    return <ClientPage tasks={await getAllTasks()}/>
}