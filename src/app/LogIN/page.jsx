'use client'
import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd'
import React from 'react'
import LoginCard from './Component/LoginCard'
import Loginform from './Component/Loginform'
import Image from 'next/image'

function page() {
  return (
    <div>
           <LoginCard>
      <Row gutter={[50,20]}>
     
        
            <Col>
            <Image src='/librarylogo.png'  width={300} height={200}/>
            </Col>
            <Col>
            <Flex justify='space-between' align='center' wrap=''>

    <div style={{ fontSize: '20px', fontWeight: '600' }}>Log IN</div>
  </Flex>
            <Loginform/>
            </Col>
       
      </Row>
      </LoginCard>
    </div>
    
  )
}

export default page
