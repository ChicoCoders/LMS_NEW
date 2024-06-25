import { center } from '@cloudinary/url-gen/qualifiers/textAlignment'
import { Button } from 'antd';
import React from 'react'
import { Chart } from "react-google-charts";



export default function usegen({ data }) {




  //  const rep = [
  //   ["Book Type", "Quantity"],
  //   ["Novels", data.novels],
  //   ["Journals", data.journals],
  //   ["Ebooks", data.ebooks],
  //   ["References Books", data.rbooks],
  //   ["Other Books", data.others],




  const options = {
      title: "BOOK Types Quantity " ,
     };
  return (
    <div style={{marginLeft:200,borderRadius:5,marginTop:0,width:"100%",paddingRight:0}}>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"800px"}
      height={"450px"}
    />
    {/* <div>
      {data.total || <p>Total Books: {data.total}</p>}
      {data.novels || <p>Novels: {data.novels}</p>}
      {data.journals || <p>Journals: {data.journals}</p>}
      {data.ebooks || <p>Ebooks: {data.ebooks}</p>}
    </div> */}
    </div>
  )
}

// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   title: "My Daily Activities",
// };

// export function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//   );
// }




