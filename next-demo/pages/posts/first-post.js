import Link from "next/dist/client/link";

export default function FirstPost (){
    return (
      <>
        <h1> This is our first post</h1>
        <Link href="/">
         
          <a> Back to Home</a>
        </Link>
      </>
    );  
}
