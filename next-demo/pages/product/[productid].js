import { useRouter } from "next/dist/client/router"
//similar to react useParams hook
import { useState } from "react";

export default function ProductionDetail(){
//while we invoke the useRouter hook it returns us a massive object hence we use the query product id to just extract the product id.
//check
const[id,setId]= useState(1);
    const router = useRouter();
    console.log(router)
    const productId = router.query.productid
    
  
    return <h1> Product Detail about is {productId} {id}</h1>
}