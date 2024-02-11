'use client'
import React from 'react'
import { Card, Flex} from 'antd'
import AdressBar from './AdressBar'

function ContentBox(props) {
  return (
    <div>
    <Card
      title={<AdressBar item={props.pageroot}/>}
      style={{
        width: '100%',
        minHeight:'360px',
      }}
    >
      <Flex justify='space-around' style={{padding:'0 40px'}}>
      {props.children}
      </Flex>
    </Card>
    </div>
  )
}

export default ContentBox
