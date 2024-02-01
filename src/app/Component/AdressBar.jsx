'use client'
import React from 'react'
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

function AdressBar(props) {
  return (
    <div>
      <Breadcrumb
    items={props.item}
  />
    </div>
  )
}

export default AdressBar
