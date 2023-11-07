'use server'
import Link from "next/link";

export default function Home() {
    let a = "example"
    //get string in .env
    let string = process.env.PLANTNET_KEY;
    //make sure file is use server if it contains api operation
    return <main>
        <Link href={`/detail/${a}`}>detail page example</Link>
        <div>TODO:home_page</div>
    </main>
}
