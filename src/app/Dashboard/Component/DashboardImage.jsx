'use client'

import Card from 'antd/es/card/Card'
import React from 'react'
import Image from 'next/image'
import img1 from '../../../../public/lib1.jpg'
import { Flex } from 'antd'




function DashboardImage() {
  return (
    <div style={{backgroundImage: `url(${img1.src})`,width:'100%', height:'100%',backgroundSize:'cover'}} >
      
    </div>
  )
}

export default DashboardImage
