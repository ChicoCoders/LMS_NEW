'use client'

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line,Pie } from '@ant-design/plots';
import { Card } from 'antd';




function PieChart(props) {
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
          value: 90,
        },
        {
          year: '1997',
          value: 180,
        },
        {
          year: '1998',
          value: 102,
        },
        {
          year: '1999',
          value: 200,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: 'AntV\nG2Plot',
          },
        },
      };
  return (
    <div >
    <Card>
    
      <center>
      <h4>{props.topic}</h4>
      <Pie  {...config} />
      </center>
      </Card>
    </div>
  )
}

export default PieChart



