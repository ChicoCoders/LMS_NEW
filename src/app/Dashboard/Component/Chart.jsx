'use client'

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { Card } from 'antd';




function Chart(props) {
    const data = [
        {
          year: '1991',
          value: 3,
        },
        {
          year: '1992',
          value: 4,
        },
        {
          year: '1993',
          value: 3.5,
        },
        {
          year: '1994',
          value: 5,
        },
        {
          year: '1995',
          value: 4.9,
        },
        {
          year: '1996',
          value: 6,
        },
        {
          year: '1997',
          value: 7,
        },
        {
          year: '1998',
          value: 9,
        },
        {
          year: '1999',
          value: 13,
        },
      ];
      const config = {
        data,
        height:200,
        width:400,
        xField: 'year',
        yField: 'value',
        xAxis: {
          //type: 'timeCat',
          tickCount: 1,
        },
        yAxis: {
            //type: 'timeCat',
            tickCount: 2,
          },
      
      };
  return (
    <div >
    <Card>
    
      <center>
      <h4>{props.topic}</h4>
      <Line  {...config} />
      </center>
      </Card>
    </div>
  )
}

export default Chart



