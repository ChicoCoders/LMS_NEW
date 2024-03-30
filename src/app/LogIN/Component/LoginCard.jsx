import { Card, Flex } from 'antd'
import React from 'react'

function LoginCard(props) {
  return (
    <div>
      <Card style={{width:"50%",padding:0}} >
  
  <Flex vertical style={{ margin: '30px 0 0 0 ' }}>{props.children}</Flex>

</Card>
  
    </div>
  )
}

export default LoginCard
