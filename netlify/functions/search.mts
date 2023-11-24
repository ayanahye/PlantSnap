import type {Context} from "@netlify/functions"

export default async function search(req: Request, ctx: Context) {
    let P_KEY = "sk-koJX6534658bd876d2628"//env not working

    let form = await req.formData()
    let q = form.get("q")
    let page = form.get("page")
    let order = form.get("order")
    let adv = form.get("adv")
    //default query
    let query = `key=${P_KEY}&q=${q}&page=${page}&order=${order}`
    //add if advance search bar is open
    if (adv == "true") {
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
    return await fetch("https://perenual.com/api/species-list?" + query)
}
