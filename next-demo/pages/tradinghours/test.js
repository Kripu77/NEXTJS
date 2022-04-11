import React from 'react'
import { useRouter } from "next/router";

const test = () => {

 
const [ apiData, setApiData] = React.useState([]);
const[Loading, setLoading] = React.useState(true);
const Router = useRouter();
const ID = Router.query.charts;
console.log(ID)

React.useEffect(()=>{
fetch("http://localhost:3000/api/test/hello")
.then((res)=>res.json())
.then((data)=>{
  
  setApiData(data)
setLoading(false)})


},[])

   const newData = apiData.filter(
     (value) => value.ITEM_DESCRIPTION === "Darlinghurst"
   );
    console.log(newData);

    if(Loading){
      return<h1> Loading</h1>
    }
  return (
    <div>test</div>
  )
}


// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/test/hello");
//   const data = await res.json();
//   return {
//     props: {
//       apiData: data,
//     },
//   };
// }
export default test