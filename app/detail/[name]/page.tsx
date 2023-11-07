import Link from "next/link";

export default function Page({params}: { params: { name: string } }) {
    return <main>
        <div>name:{params.name}</div>
        <Link href={`/detail/${params.name}/filter`}>filter page example</Link>
        <div>TODO:detail_page</div>
    </main>
}