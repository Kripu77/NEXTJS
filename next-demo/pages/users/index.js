
import Link from "next/dist/client/link"
function Homepage() {
    return (
        <div>
            <h1> Pre-rendering example</h1>
            <Link href="/users/users">
            <a>View Users</a>
            
            </Link>
        </div>
    )
}

export default Homepage
