
import {useRouter} from 'next/router'
export default function ReviewID(){
    const Router = useRouter();
    const ID = Router.query.reviewID;
   return <h1> Hello {ID}</h1> 
}