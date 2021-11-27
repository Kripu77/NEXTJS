import { useRouter } from "next/router"
export default function ProductID(){
    const Router = useRouter()
    const ID = Router.query.productID
    return <h1> This is the product homepage{ID}</h1>
}