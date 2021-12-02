import Link from "next/link"
function Homepage() {


    return (
        <div>
            <h1> To do Home page</h1>
            <Link href="/todos/list">
            <a>Click here to view the to dos</a>
            </Link>
        </div>
    )
}

export default Homepage
