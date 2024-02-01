'use client'
import { Card, Statistic } from 'antd'
import React from 'react'

const prefixtyle={
    fontWeight:'900',
    fontSize:'2.5rem',
    padding:'0 30px 0 0',
    opacity:'0.5'
  }

  const hrstyle={
    padding:'0 30px 0 0',
    opacity:'0.5'
  }

function TimeCard(props) {
  return (
    <div>
    <Card bordered={false} style={{background:props.background,borderRadius:0}} >
    <Statistic 
          
          value={'10:55  PM'}
          valueStyle={{
            fontWeight:'700',
            color: 'white',
            fontSize:'2rem',
            margin:'0 0 20px 0',
            opacity:'0.8'
          }}
          prefix={<div style={prefixtyle}>{props.prefix1}</div>}
          suffix={props.suffix}
        />
        <hr style={hrstyle}/>
        <Statistic 
          value={'2024 January 23'}
          valueStyle={{
            fontWeight:'700',
            color: 'white',
            fontSize:'2rem',
            opacity:'0.8',
        
          }}
          prefix={<div style={prefixtyle}>{props.prefix2}</div>}
          suffix={props.suffix}
        />
      </Card>
    </div>
  )
}

export default TimeCard
