export default function Page({params}: { params: { name: string } }) {
    return <main>
        <div>name:{params.name}</div>
        <div>TODO:filter_page</div>
    </main>
}
