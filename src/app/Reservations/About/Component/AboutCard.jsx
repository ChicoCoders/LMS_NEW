'use client'
import { Button, Col, Descriptions, Flex, Image, Row } from 'antd'
import Card from 'antd/es/card/Card'
import Link from 'next/link';
import React, { useState } from 'react'
import EditModal from './EditModal'
import { HomeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: 'Reservation ID',
    children: 'R123456',
  },
  {
    key: '7',
    label: 'Resource ID (ISBN)',
    span: 2,
    children: '978-1234567890',
  },
  {
    key: '5',
    label: 'Book Title',
    children: 'The Taranmituin Chronicles',
  },


  {
    key: '2',
    label: 'User ID',
    children: 'U789012',
  },
  {
    key: '3',
    label: 'User Name',
    children: 'Jane Doe',
  },
  {
    key: '4',
    label: 'Issuer ID',
    children: 'Librarian123',
  },

  {
    key: '9',
    label: 'Borrow Date',
    children: '2024-02-04',
  },
  {
    key: '10',
    label: 'Due Date',
    children: '2024-03-04',
  },
  {
    key: '11',
    label: 'Return Date',
    children: '2024-03-01',
  },
  {
    key: '12',
    label: 'Penalty Status',
    children: 'None',
  },
];



function AboutCard() {
  const [modalState, changeModalState] = useState(false);

  const openModal = () => {
    changeModalState(true);
  }
  const closeModal = () => {
    changeModalState(false);
  }


  return (
    <Flex  style={{width:'100%'}} justify='center'>
      <div>dafsdddddddddddsddddd</div>
      <Card bordered style={{width:'90%'}}>
        <Button type='primary' danger style={{ margin: " 0 20px 20px 0" }} shape='round'>OverDue</Button>
        <Button type='primary' shape='round'>Remind</Button>
        <Row gutter={[30, 30]} align="middle" justify="center">
          <Col md={6} sm={24} xs={24} >

            <Image
              src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
              alt="Picture of the author"
              width="100%"
              style={{ borderRadius: '10%' }}
            />
          </Col>
          <Col md={18} sm={24} xs={24}>
            <Descriptions title={<div>Reservation Details <Link href=" " onClick={openModal}><span ><EditOutlined /></span></Link> <Link href=" " onClick={openModal}><span ><DeleteOutlined /></span></Link></div>} layout="horizontal" column={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 2,

            }}
              items={items}
            />

          </Col>

        </Row>

      </Card>
      <EditModal open1={openModal} close1={closeModal} open={modalState} />
    </Flex>
  )
}

export default AboutCard
