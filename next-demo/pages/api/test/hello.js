// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require("fs");
const csv = require("csv-parser");
const results = [];

 fs.createReadStream('C:\\Users\\Kripu\\Desktop\\practice\\NEXTJS\\next-demo\\pages\\api\\test\\BIHJ Store Locations Operating Hours_20220409150024.csv')
   .pipe(csv({ separator: "|" }))

   .on("data", (data) => results.push(data))

   .on("end", () => {console.log(results)}
   );


   


export default function handler(req, res) {
  res.status(200).json( results )
}
