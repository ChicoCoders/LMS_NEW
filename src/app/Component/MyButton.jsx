'use client'
import { Button } from 'antd'
import React from 'react'



function MyButton(props) {
  return (
    <div>
      <Button block="true" type="primary" icon={props.icon} style={{fontSize:'1rem',height:'auto',backgroundColor:'rgb(0,21,41)'}}>
        <div style={{opacity:0.8}}> {props.children}</div>
        </Button>
    </div>
  )
}

export default MyButton
