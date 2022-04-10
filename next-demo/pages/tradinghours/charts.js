import React from 'react';
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
             parseInt("22:00PM") - parseInt("09:00AM"),
             parseInt("22:00PM") - parseInt("09:00AM"),
             parseInt("22:00PM") - parseInt("09:00AM"),
             parseInt("22:00PM") - parseInt("09:00AM"),
             parseInt("22:00PM") - parseInt("09:00AM"),
             parseInt("22:00PM") - parseInt("09:00AM"),
             parseInt("22:00PM") - parseInt("09:00AM"),
           ],
         },

         {
           type: "bar",
           label: "Open",
           backgroundColor: "green",
           data: [
             parseInt("09:00AM"),
             parseInt("09:00AM"),
             parseInt("09:00AM"),
             parseInt("09:00AM"),
             parseInt("09:00AM"),
             parseInt("09:00AM"),
             parseInt("09:00AM"),
           ],
           borderColor: "white",
           borderWidth: 2,
         },
         {
           type: "bar",
           label: "Close",
           backgroundColor: "red",
           data: [
             parseInt("23:00PM"),
             parseInt("22:00PM"),
             parseInt("22:00AM"),
             parseInt("22:00AM"),
             parseInt("22:00AM"),
             parseInt("22:00AM"),
             parseInt("22:00AM"),
           ],
         },
       ],
     };
  return(
  <div>
    <Chart type="bar" data={data} />
    <h1 style={{textAlign:'center'}}> Store Trading Hours For: Darlinghurst</h1>
  </div>);
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