import {useRouter} from "next/router"

function Home() {
    //router from next router
    const Router = useRouter();
    //destructure the file name directly and set it as emptyy array to prevent any possible errors 
    const {all=[]} = Router.query

    if(all.length===1){
        return <h1> The params passed is {all[0]}</h1>
    }

    if(all.length===2){
        return <h1> The params passed is {`${all[0]} ${all[1]}`}</h1>
    }
    //render this segment when the above condtions are not met
    return (
        <div>
            <h1> Home page for docs</h1>
        </div>
    )
}

export default Home
