import {useRouter} from "next/router"

function ApplicationID() {
    const router = useRouter()
    const ID = router.query.applicationId
    return (
        <div>
           <h1> This is the application ID page {ID}</h1> 
        </div>
    )
}

export default ApplicationID
