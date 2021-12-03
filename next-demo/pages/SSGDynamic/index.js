//url for data

const url = "https://jsonplaceholder.typicode.com/posts";
import Link from "next/dist/client/link";
function Index({lists}) {
    return (
        <div>
           <h1> Home page for SSG with Dynamic pattern</h1> 
           <h1> This page consist of list of posts.</h1>
           {
               lists.map((list)=>{
                   const {id, userId, title, body} = list

                   return (
                     <div key={id}>
                       <Link href={`/SSGDynamic/${id}`} passHref>
                         <p>{title}</p>
                       </Link>
                       <hr></hr>
                     </div>
                   );

               })
           }
        </div>
    )
}

export default Index

export async function getStaticProps(){
    const response = await fetch(url)
    const data = await response.json()

    return {
        props:{
            lists:data.slice(0,7)
        }
    }
}
