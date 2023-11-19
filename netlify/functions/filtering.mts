import type {Context} from "@netlify/functions"

export default async function filtering(req: Request, ctx: Context) {
    let P_KEY = "sk-sZxb6546cce0783d62824";
    try {
      //const data = await req.json();
      const params = new URL(req.url).searchParams;
      const plantId = params.get("q");
  
      const url = `https://perenual.com/api/species/details/${plantId}?key=${P_KEY}`;
      const res = await fetch(url);
  
      return new Response(res.body);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  