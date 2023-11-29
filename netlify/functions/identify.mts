import type {Context} from "@netlify/functions"

export default async function search(req: Request, ctx: Context) {
    //see .env file in root folder
    let P_KEY = "2b10hXhrQ83oqDn4qN2zVROe"
    let data = new FormData()
    let form = await req.formData()
    let organs = form.get("organs") as string
    for (let i = 1; i <= 5; i++) {
        let file = form.get("upImg" + i) as File;
        if (file.name != "undefined") {
            data.append("images", file, file.name)
        }
    }
    for (let string of organs.split(",")) {
        data.append("organs", string)
    }
    console.dir(data)
    let res = await fetch(`https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=false&lang=en&api-key=${P_KEY}`,
        {
            body: data,
            method: 'POST',
        })
    return new Response(res.body)
}