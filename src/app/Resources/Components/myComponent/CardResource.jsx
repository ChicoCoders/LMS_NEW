'use client'
import React, { useState } from 'react';
import { Card, Space, Col, Row, Image, Flex, Button, ConfigProvider } from 'antd';
import { UserDeleteOutlined, MoreOutlined } from '@ant-design/icons';
import myLocalImage from './Book.jpg';
//import AboutCardModel from '../../About/Components/AboutCardModel'
//import AboutCardModel from '../AboutCardModel'
//import EditModal from '../EditModal'
import Link from 'next/link';
import IssueModal from '../../../Reservations/Component/IssueModal';

import AboutCard from '../../[isbn]/Components/AboutCard';






function CardResource(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
  
    setOpen(true);

  };
  const closeModal = () => {
    setOpen(false);
  };
  
  const getCardStyle = () => {
    return {
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 4px 8px 0 rgba(0, 0, 0, 0.40)' : '0 4px 8px 0   rgba(0, 0, 0, 0.15)', // Apply shadow on hover
        backgroundColor: isHovered ? '#f5f5f5' :  'white', // Change background color on hover
    };
};


  return (

    <Col >
    <ConfigProvider
  theme={{
    token: {
      colorBorderSecondary:"rgba(0 ,33, 64,0.2)",
      borderRadiusLG:0
    },}}>
 
      <Card  styles={{
            body: { padding: '0' },
          }}
      style={getCardStyle()} // Apply styles based on hover state
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)}  >
        <Row style={{ width: "100%" }} justify="center" >
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

            <li>No of Books: {props.dataset.noOfBooks}</li>
            <Flex style={{ fontWeight: 600, }} justify='space-between'>
            {/* <div onClick={showModal1} style={{color:'primary'}}>More...</div> */}
            <Link href={`/Resources/${props.dataset.isbn}`}>More..</Link>
              

            </Flex>
            <Button  type='primary' size="small" block onClick={showModal}>Issue</Button>
          </Col>

        </Row>
      </Card>
      
</ConfigProvider>

{/* <AboutCardModel open={open1} openFuntion={showModal1} close={closeModal1} data={props.dataset.isbn}/> */}
<IssueModal open={open} openFuntion={showModal} close={closeModal} data={props.dataset.isbn} />
{/* <EditModal open={open3} openFuntion={showModal3} close={closeModal3} data={props.dataset}/> */}
      </Col>




  )
}


export default CardResource