//capture the segments
import {useRouter} from "next/router"

function docs() {
    const Router = useRouter();
    //destructre params passed 
    const {params=[]} = Router.query
    console.log(params)

    return (
        <div>
            <h1> This is the docs homepage, we are using the params {params}</h1>
            
        </div>
    )
}

export default docs
