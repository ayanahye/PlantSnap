"use server"

import {perenual_search} from "@/app/globalTypes";

export async function postSearch(form: FormData, adv: boolean): Promise<perenual_search> {
    let P_KEY = process.env.PERENUAL_KEY

    let q = form.get("q")
    let page = form.get("page")
    let order = form.get("order")

    let query = `key=${P_KEY}&q=${q}&page=${page}&order=${order}`
    if (adv) {
        let Edible = form.get("edible")
        let Poisonous = form.get("poisonous")
        let Cycle = form.get("cycle")
        let Watering = form.get("watering")
        let Sunlight = form.get("sunlight")
        let Indoor = form.get("indoor")
        let hdmin = form.get("hdmin")
        let hdmax = form.get("hdmax")
        if ("" != Edible) query += `&edible=${Edible}`
        if ("" != Poisonous) query += `&poisonous=${Poisonous}`
        if ("" != Cycle) query += `&cycle=${Cycle}`
        if ("" != Watering) query += `&watering=${Watering}`
        if ("" != Sunlight) query += `&sunlight=${Sunlight}`
        if ("" != Indoor) query += `&indoor=${Indoor}`
        query += `&hardiness=${hdmin}-${hdmax}`
    }
    let res = await fetch("https://perenual.com/api/species-list?" + query)
    return await res.json()
}