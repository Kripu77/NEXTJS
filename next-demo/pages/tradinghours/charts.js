import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



export default function Charts ({apiData}) {


 
  
   const newData = apiData.filter(
     (value) => value.ITEM_DESCRIPTION === "Port Macquarie"
   );
  console.log(newData[0].ITEM_DESCRIPTION)

     const data = {
       labels,
       datasets: [
         {
           type: "line",
           label: "Average Trading Hours",
           borderColor: "rgb(255, 99, 132)",
           borderWidth: 2,
           fill: false,
           data: [
             parseInt(newData[0].MONDAY_CLOSE_TIME) -
               parseInt(newData[0].MONDAY_OPEN_TIME),
             parseInt(newData[0].TUESDAY_CLOSE_TIME) -
               parseInt(newData[0].TUESDAY_OPEN_TIME),
             parseInt(newData[0].WEDNESDAY_CLOSE_TIME) -
               parseInt(newData[0].WEDNESDAY_OPEN_TIME),
             parseInt(newData[0].THURSDAY_CLOSE_TIME) -
               parseInt(newData[0].THURSDAY_OPEN_TIME),
             parseInt(newData[0].FRIDAY_CLOSE_TIME) -
               parseInt(newData[0].FRIDAY_OPEN_TIME),

             parseInt(newData[0].SATURDAY_CLOSE_TIME) -
               parseInt(newData[0].SATURDAY_OPEN_TIME),
             ,
             parseInt(newData[0].SUNDAY_CLOSE_TIME) -
               parseInt(newData[0].SUNDAY_OPEN_TIME),
             
           ],
         },

         {
           type: "bar",
           label: "Open",
           backgroundColor: "green",
           data: [
             parseInt(newData[0].MONDAY_OPEN_TIME),
             parseInt(newData[0].TUESDAY_OPEN_TIME),
             parseInt(newData[0].WEDNESDAY_OPEN_TIME),
             parseInt(newData[0].THURSDAY_OPEN_TIME),
             parseInt(newData[0].FRIDAY_OPEN_TIME),
             parseInt(newData[0].SATURDAY_OPEN_TIME),
             parseInt(newData[0].SUNDAY_OPEN_TIME),
           ],
           borderColor: "white",
           borderWidth: 2,
         },
         {
           type: "bar",
           label: "Close",
           backgroundColor: "red",
           data: [
             parseInt(newData[0].MONDAY_CLOSE_TIME),
             parseInt(newData[0].TUESDAY_CLOSE_TIME),
             parseInt(newData[0].WEDNESDAY_CLOSE_TIME),
             parseInt(newData[0].THURSDAY_CLOSE_TIME),
             parseInt(newData[0].FRIDAY_CLOSE_TIME),
             parseInt(newData[0].SATURDAY_CLOSE_TIME),
             parseInt(newData[0].SUNDAY_CLOSE_TIME),
           ],
         },
       ],
     };

     if(apiData===[]){
       return <h1> Data is loading....</h1>
     }
  return (
    <div style={{ textAlign: "center" }}>
      <Chart type="bar" data={data} />
      <h1> Is the store 24/7? <br>
      </br>  {newData[0]._24_7}</h1>
      <h1> Store Trading Hours For: {newData[0].ITEM_DESCRIPTION} </h1>
      <Link href="/tradinghours"> Back to Home page</Link>
    </div>
  );
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