'use client'
import React from 'react'
import { Button, Card, Flex, Statistic} from 'antd'

const titlestyle={
  

  fontSize:'1rem'
}
const suffixstyle={
  flex:1,
  
  padding:'0 0 0 30px',
  opacity:'0.5'
}


function DashboardCard(props) {
  return (
    <div>
      <Card   >
        <Flex wrap='wrap'>
          <Flex style={{flex:1}}>
        <Statistic 
          title={<div style={titlestyle}>{props.title} </div>}
          value={props.value}
          valueStyle={{
            fontWeight:'700',
            fontSize:'1.5rem',
            opacity:'0.9'
          }}
         suffix={props.suffix}
         prefix={props.prefix}
        /></Flex>
        <Flex style={suffixstyle} align='center' justify='center'><Button size='large'  type='primary' shape='circle'>{props.icon}</Button></Flex>
        </Flex>
      </Card>
    </div>
  )
}

export default DashboardCard
