import { useRouter } from "next/router"
export default function ResultPage(){


    const Router = useRouter();
    const ID= Router.query.studentID
    return <h1> This is the result for student with ID {ID}</h1>
}