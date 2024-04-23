'use client'
import React, { useState } from 'react';
import { Card, Space, Col, Row, Image, Flex, Button, ConfigProvider } from 'antd';
import { UserDeleteOutlined, MoreOutlined } from '@ant-design/icons';
import myLocalImage from './Book.jpg';
import Link from 'next/link';
import IssueModal from '../../../Reservations/Component/IssueModal';




function CardResource(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
  
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
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
            <li>No of Books : {props.dataset.numberOfBooks}</li>
            <Flex style={{ fontWeight: 600, }} justify='space-between'>
              <div><Link href="/Resources/About">More...</Link></div>
              <Link href="">Edit</Link>
            </Flex>
            <Button  type='primary' size="small" block onClick={showModal}>Issue</Button>
          </Col>

        </Row>
      </Card>
      
</ConfigProvider>

<IssueModal open={open} openFuntion={showModal} close={closeModal} data={props.dataset.isbn} />
      </Col>



  )
}


export default CardResource