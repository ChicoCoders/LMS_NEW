'use client'
import React, { useState } from 'react';
import { Card, Space, Col, Row, Image, Flex, Button, ConfigProvider } from 'antd';
import { UserDeleteOutlined, MoreOutlined } from '@ant-design/icons';
import myLocalImage from './Book.jpg';
import Link from 'next/link';


function CardResource(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (

    <Col >
    <ConfigProvider
    theme={{
    token: {
      colorBorderSecondary:"rgba(0 ,33, 64,0.2)",
      borderRadiusLG:10
    },
  }}
>
 
      <Card bodyStyle={{ padding: "0" }}  >
        <Row style={{ width: "100%" }} justify="center">
          <Col >
          
            <Image 
              src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
              alt="Resource"
              width="140px"
              height="210px"
            />
          </Col>
          <Col style={{ lineHeight: '32px',padding:' 15px 15px 0 15px' }} >
            <li><b>{props.dataset.title.length < 12 ? props.dataset.title: props.dataset.title.substring(0, 12) + "...."}</b></li>
            
            <li>{props.dataset.isbn.length < 14 ? props.dataset.isbn: props.dataset.isbn.substring(0, 14) + "..."}</li>
            <li>{props.dataset.author.length < 14 ? props.dataset.author: props.dataset.author.substring(0, 14) + "..."}</li>
            <li>No of Books :{props.dataset.noOfBooks}</li>
              <Flex style={{ fontWeight: 600, }} justify='space-between'>
              <Button onClick={showModal}>More...</Button>
              <Link href="">Edit</Link>
            </Flex>
            <Button  style={{ background: '#2395EF', color: 'white' }} size="small" block>Issue</Button>
          </Col>

        </Row>
      </Card>
      
</ConfigProvider>
      </Col>


    // <Space
    //   direction="horizontal"
    //   size="middle"
    //   style={{
    //     display: 'flex',
    //     width:'930px',
    //     height:'600px',
    //     boxShadow:'0px 12px 12px 0px #00000040',
    //     border: '0.3px solid #00000080 #00000040'

    //   }}
    // >
    //   <Col md={18} sm={24} xs={24}>
    //   </Col>    
    //   <Col md={40} sm={400} xs={400} layout="vertical">


    //   </Col>

  )
}


export default CardResource