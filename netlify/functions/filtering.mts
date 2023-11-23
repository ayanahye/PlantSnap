import type {Context} from "@netlify/functions"

export default async function filtering(req: Request, ctx: Context) {
    let P_KEY = "sk-sZxb6546cce0783d62824";
    try {
        let plantId = new URL(req.url).searchParams.get("q");
        if (!plantId) return new Response("")
        if (!Number.isInteger(plantId)) {//is sci name
            let response = await fetch(`https://perenual.com/api/species-list?key=${P_KEY}&q=${plantId}`);
            const speciesList = await response.json();
            if (speciesList.data.length == 0) return new Response("")
            plantId = speciesList.data[0].id;
        }
        const res = await fetch(`https://perenual.com/api/species/details/${plantId}?key=${P_KEY}`);
        return new Response(res.body);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
  
