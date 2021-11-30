
import {useRouter} from "next/router"
export default function HomePage(){

    const Router = useRouter()
    //set it to an empty array to catch any possible errors

    const {params = []} = Router.query

    return <h1> This is the catch all route feature in next js, it follows similar approach to destructuring. The parameter that we passed in URl is {params[0]} { " "} {params[1]}</h1>
}