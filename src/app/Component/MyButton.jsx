'use client'
import { Button } from 'antd'
import React from 'react'
import '../page.module.css'


function MyButton(props) {
  return (
    <div>
      <Button className='mybtn' block  icon={props.icon} style={{}}>
        <div style={{opacity:1}}> {props.children}</div>
        </Button>
    </div>
  )
}

export default MyButton
