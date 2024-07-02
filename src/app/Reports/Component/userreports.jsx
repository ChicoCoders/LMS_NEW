import { center } from '@cloudinary/url-gen/qualifiers/textAlignment'
import React from 'react'
import { Chart } from "react-google-charts";



export default function userreport({ data }) {

   const rep = [
    ["Book Type", "Quantity"],
    ["Admin", data.admin],
    ["Petron", data.petron],
    //["Others", 7],
  ];

  const options = {
      title: "Users Quantity "+ data.total ,
     };
  return (
    <div style={{marginLeft:200,borderRadius:5,marginTop:0,width:"100%",paddingRight:0}}>
    <Chart
      chartType="PieChart"
      data={rep}
      options={options}
      width={"800px"}
      height={"450px"}
    />
    
    </div>
  )
}





