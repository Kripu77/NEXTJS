//link component from next router

import Link from "next/dist/client/link"

function Home() {

    return (
        <div>
            <h1> Welcome to the Krip.com home page</h1>
            <Link href="/posts/all">
            <a>Click here to view all post</a>
            </Link>
        </div>
    )
}

export default Home
