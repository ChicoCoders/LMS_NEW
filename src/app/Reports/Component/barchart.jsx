// import React from 'react';
// import { Bar } from '@ant-design/charts';

// function BarChart(props) {
//     const data = props.data
//     const config = {
//     data,
//     xField: 'day',
//     yField: 'y',
//     // seriesField: 'type',
//     label: {
//       //position: 'middle',
//       style: {
//         fill: '#fff',
//         opacity: 0.6,
//       },
//     },
//     legend: false,
    
//   };

//   return <Bar {...config} />;
// };

// export default BarChart;

// components/BarChart.js
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = (props) => {
  const transformedData = props.data.map(item => ({
    label: item.day,
    y: item.y
  }));

  const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [{
      type: "column",
      dataPoints: transformedData
    }]
  };
  
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BarChart;
