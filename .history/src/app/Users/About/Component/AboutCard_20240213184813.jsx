'use client'
import { Button, Col, Descriptions, Flex, Image, Row } from 'antd'
import Card from 'antd/es/card/Card'
import Link from 'next/link';
import React, { useState } from 'react'
import EditModal from './EditModal'
import { HomeOutlined,EditOutlined,DeleteOutlined  } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: 'User ID',
    children: 'R123456',
  },
  {
    key: '2',
    label: 'User Name',
    span: 2,
    children: '978-1234567890',
  },
  {
    key: '3',
    label: 'Email',
    children: 'The Taranmituin Chronicles',
  },

 
  {
    key: '4',
    label: 'NIC',
    children: 'U789012',
  },
  {
    key: '5',
    label: 'Date of Birth',
    children: 'Jane Doe',
  },
  {
    key: '6',
    label: 'Phone Number',
    children: 'Librarian123',
  },
 
  {
    key: '7',
    label: 'Added By',
    children: '2024-02-04',
  },
  // {
  //   key: '8',
  //   label: 'Due Date',
  //   children: '2024-03-04',
  // },
  // {
  //   key: '9',
  //   label: 'Return Date',
  //   children: '2024-03-01',
  // },
  // {
  //   key: '10',
  //   label: 'Penalty Status',
  //   children: 'None',
  // },
];



function AboutCard() {
    const [modalState,changeModalState]=useState(false);

    const openModal=()=>{
        changeModalState(true);
    }
    const closeModal=()=>{
      changeModalState(false);
    }


  return (
   
      <Flex  style={{width:'100%'}} justify='center'>
      <Card bordered style={{borderWidth:3,width:'80%'}}>
      <Flex justify='space-between'>
        <div>
      <Button type='primary' danger style={{margin:" 0 20px 20px 0"}} shape='round'>Admin</Button>
      <Button type='primary' shape='round'>Remind</Button>
      </div>
      <Button type='primary' shape='circle'>Edit</Button>
      <Button type='primary' shape='circle' icon={<DeleteOutlined/>}></Button>
      </Flex>
      
        <Row gutter={[30,30]} align="middle" justify="center">
          <Col md={6} sm={24} xs={24} >
          
            <Image 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Picture of the author"
            width="100%"
            style={{borderRadius:'50%'}}
          />
          </Col>
          <Col md={18} sm={24} xs={24}>
            <Descriptions   title={<div>User Details<Link href=" " onClick={openModal}><span ><DeleteOutlined /></span></Link></div>} layout="horizontal" column={{
               xs: 1,
               sm: 2,
               md: 2,
               lg: 2,
               xl: 2,
               xxl: 2,
               
            } }
         items={items}
         />
        
          </Col>

        </Row>
            
      </Card>
              <EditModal open1={openModal} close1={closeModal} open={modalState}/>
              </Flex>
    
  )
}

export default AboutCard
