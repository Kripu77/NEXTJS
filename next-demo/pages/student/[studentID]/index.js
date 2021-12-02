//useRouter package

import {useRouter} from "next/router"

export default function StudentID(){
    const Router = useRouter();
    const ID = Router.query.studentID;
    return <h1> This is the studentID {ID}</h1>
}