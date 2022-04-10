import React from 'react'

const test = ({apiData}) => {

 

   const newData = apiData.filter(
     (value) => value.ITEM_DESCRIPTION === "Darlinghurst"
   );
    console.log(newData);
  return (
    <div>test</div>
  )
}


export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/test/hello");
  const data = await res.json();
  return {
    props: {
      apiData: data,
    },
  };
}
export default test