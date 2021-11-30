//Link from next link package
import Link from "next/dist/client/link"
function Home() {
    
    return (
        <div>
            <h1> The total albums available are: </h1>
            <Link href="/albums/all">
            <a>View all albums</a>
            </Link>
        </div>
    )
}

export default Home
