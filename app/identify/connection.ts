"use server"

import {plantnet, plantnet_test_value} from "@/app/globalTypes";

export async function postData(form: FormData): Promise<plantnet> {
    // console.dir(form)
    let P_KEY = process.env.PLANTNET_KEY
    let data = new FormData()
    for (let i = 1; i <= 5; i++) {
        let file = form.get("upImg" + i) as File;
        if (file.name != "undefined") {
            data.append("images", file, file.name)
        }
    }
    data.append("organs", form.get("organs") as string)
    console.dir(data)
    // let res = await fetch(`https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=false&lang=en&api-key=${P_KEY}`,
    //     {
    //         body: data,
    //         method: 'POST',
    //     })
    // return await res.json()
    return plantnet_test_value
}