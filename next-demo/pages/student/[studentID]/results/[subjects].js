import { useRouter } from "next/router"
// import {Link} from "next/link"
import Link from "next/dist/client/link";

export default function Subjects(){
    //
    const Router = useRouter();
    const subject = Router.query.subjects
    const ID = Router.query.studentID
    return (
      <>
        <h1>
          The result of subject {subject} for student student with student ID{" "}
          {ID} is A+
          <Link style={{ color: "red" }} href="/student">
            <a> Back to student Home Page</a>
          </Link>
        </h1>
      </>
    );
}