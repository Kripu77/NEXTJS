import Link from "next/dist/client/link"
function All({albums}) {
    return (
        <div>
            <h1> Here are the total albums available</h1>
            <Link href="/albums">
            <a>Back to home</a>
            </Link>

            {/* map over the albums obtained */}
            {albums.map((album)=>{
                return(<div key={album.id}>
                    <h1> Album title: {album.title}</h1>
                    </div>)
            })}
        </div>
    )
}

export default All

//in any page component we get access to a async function which is known as getStatic props in next js

export async function getStaticProps(){

    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    const data = await response.json()
 

    //if we donot return this object next js will throw server error stating as if we forgot a return statment

    return{
        props:{
  albums:data
    }
    }
}
