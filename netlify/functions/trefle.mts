import type {Context} from "@netlify/functions"

export default async function filtering(req: Request, ctx: Context) {
    let T_KEY = 'nodvjKJixIlkx70P9sOsJqbXLiLb1CdXCtZguy03z3c';
    try {
      const params = new URL(req.url).searchParams;
      const plantList = params.get("q");
  
      const url = `https://trefle.io/api/v1/species/search?q=${plantList}&token=${T_KEY}`;
      const res = await fetch(url);
  
      return new Response(res.body);

    } catch (error) {
      console.log("Error fetching data:", error);

    }
  }
  
  

