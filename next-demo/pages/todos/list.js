import Link from "next/dist/client/link"
import axios from "axios"

function List({list}) {
    return (
        <div>
            <h1>To do list are as follows:</h1>
            <Link href="/todos">
            <a> Back to home</a>
            </Link>

            {list.map((list)=>{
                return(<>
                <div key={list.id}>
                    <h1>{list.title}</h1>
                    <hr></hr>
                    <h3>Completed: {list.completed}</h3>

                </div>
                
                
                </>)
            })}
        </div>
    )
}

export default List


//getStaticProps fn

export async function getStaticProps(){
const response = await fetch("http://jsonplaceholder.typicode.com/todos")
const data = await response.json();
return{
    props:{
        list:data
    }
}
    
}
