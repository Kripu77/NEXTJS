

import Link from "next/dist/client/link";
import User from "../components/user";

function All({posts}) {
    return (
        <div>
            <h1> Posts:::::</h1>
            <Link href="/posts">
                <a> Back to Home</a>

            </Link>
            {
                posts.map((post)=>{
                    return <div key={post.id}>
                        <User post={post}/>
                         </div>

                })
            }
        </div>
    )
}

export default All

//with every page component next js provide a async function known as getStatic props in order to enable pre rendering with data
export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return{
        props:{
            posts:data
        }
    }
}
