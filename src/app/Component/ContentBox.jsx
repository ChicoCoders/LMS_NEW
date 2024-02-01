'use client'
import React from 'react'
import { Card} from 'antd'
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
      <div style={{padding:'0 40px'}}>
      {props.children}
      </div>
    </Card>
    </div>
  )
}

export default ContentBox
