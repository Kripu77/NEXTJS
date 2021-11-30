import Link from "next/dist/client/link"

function UsersList({users}) {
    return (
        <div>
            <h1> The list of users available are</h1>
            <Link href="/users">
            <a>Back to Home</a>
            </Link>
            {users.map((value)=>{
                return <div key={value.id}>
                    <h1>{value.name}</h1>
                    <h1>{value.email}</h1> </div>

            })}
        </div>
    )
}

export default UsersList

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)

    //return object
    return{
        props:{
            users:data
        }
    }
}
