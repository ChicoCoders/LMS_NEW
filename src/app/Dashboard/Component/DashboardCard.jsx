'use client'
import React from 'react'
import { Card, Flex, Statistic} from 'antd'

const titlestyle={
  color:'white',
  fontSize:'1rem'
}
const prefixtyle={
  fontWeight:'900',
  fontSize:'2.5rem',
  padding:'0 30px 0 0',
  opacity:'0.5'
}


function DashboardCard(props) {
  return (
    <div>
      <Card bordered={false} style={{background:props.background,borderRadius:0,height:'100%'}} >
        <Statistic 
          title={<div style={titlestyle}>{props.title}</div>}
          value={props.value}
          valueStyle={{
            fontWeight:'700',
            color: 'white',
            fontSize:'2.5rem',
            textAlign:'center',
            opacity:'0.8'
          }}
          prefix={<div style={prefixtyle}>{props.prefix}</div>}
          suffix={props.suffix}
        />
      </Card>
    </div>
  )
}

export default DashboardCard
