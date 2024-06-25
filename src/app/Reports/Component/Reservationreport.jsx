import { center } from '@cloudinary/url-gen/qualifiers/textAlignment'
import React from 'react'
import { Chart } from "react-google-charts";



export default function Reservationreport({ data }) {

   const rep = [
    ["Book Type", "Quantity"],
    ["Due", data.due],
    ["Reserved", data.reserved],
    ["Borrowed", data.borrowed]
    //["Others", 7],
  ];

  const options = {
      title: "Reservation Quantity "+ data.total ,
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





