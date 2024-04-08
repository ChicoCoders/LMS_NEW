'use client'
import { Button, Col, Descriptions, Flex, Image, Row,Popover,Modal,} from 'antd'
import { Collapse } from 'antd';

const { Panel } = Collapse;
import Card from 'antd/es/card/Card'
import Link from 'next/link';
import React, { useState } from 'react'
import EditModal from './EditModal'
import ResourcesAddForm from '../../Components/ResourcesAddForm';
import { HomeOutlined,EditOutlined,DeleteOutlined  } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';

const items = [
  {
    key: '1',
    label: 'Title',
    children: 'Advanced Level Physics (New Syllabus) MCQ Review',
  },
  {
    key: '2',
    label: 'ISBN',
    span: 2,
    children: '978-955-1760-43-4',
  },
  {
    key: '3',
    label: 'Autor',
    children: 'Dr S.R.D Rosa',
  },
  {
    key: '4',
    label: 'Year',
    children: '2020',
  },
  {
    key: '5',
    label: 'Type',
    children: 'Book',
  },
  {
    key: '6',
    label: 'Publisher',
    children: 'GRC Publisher',
  },
 
  {
    key: '7',
    label: 'Price',
    children: 'Rs 650.00',
  },
  {
    key: '8',
    label: 'No. Pages',
    children: '250 pages',
  },
  {
    key: '9',
    label: 'Added on',
    children: '20 January 2020',
  },
  
];

function AboutCartModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
    <Button type="primary" onClick={showModal}>
        Open Modal
    </Button>
    <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}  
                style={{maxWidth:'95%'}}
                width='80%'
                height='90%'
                centered footer={[
                    <>
                        <Button    key="submit" type="primary" onClick={handleOk}>
                            Ok
                        </Button>
                        
                    </>  
                ]}>
        <Flex  style={{width:'100%'}} justify='center'>
      <Card bordered style={{width:'90%'}}>
        <Row gutter={[30,30]} align="middle" justify="center">
          <Col md={8} sm={24} xs={24}  >
          
          <Image
              src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
              alt="Picture of the author"
              width="100%"
              style={{ borderRadius: '10%' }}
            />
          </Col>
          <Col md={16} sm={24} xs={24} >
            <Descriptions   title={<div>Resources Details<Link href=" " >
            
            </Link>
            <Flex justify='space-between'style={{margin:'30px 10px'}}>
              <div >
              <Popover  title="Quantity" placement="bottomLeft">
                <Button type="primary"style={{background:'#2D363F',margin:" 0 10px 10px 0",borderRadius: '15px'}}>5</Button>
              </Popover>
              <Popover title="Cupboard" placement="bottom" >
                <Button type="primary" style={{background:'#2D363F',margin:" 0 10px 10px 0",borderRadius: '15px'}}>5</Button>
              </Popover>
              <Popover title="Shelf" placement="bottom" >
                <Button type="primary" style={{background:'#2D363F',margin:" 0 10px 10px 0",borderRadius: '15px'}}>5</Button>
              </Popover>
              <Popover title="Added on" placement="bottomRight" >
                <Button type="primary" style={{background:'#2D363F',margin:" 0 10px 10px 0",borderRadius: '15px'}}>5</Button>
              </Popover>
             </div>
           
             <div style={{height:'30px'}}>
              <Button type='primary' danger style={{margin:" 0 10px 10px 0"}} shape='round' icon={<DeleteOutlined/>}></Button>
              <Button type='primary' style={{margin:" 0 10px 10px 0"}} shape='round'icon={<EditOutlined/>}></Button>
            </div>  
           </Flex> 
            </div>} layout="horizontal" column={{
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
        <Collapse >
              <Panel header="Description" key="1">
                <p>sjdhg</p>
             </Panel> 
          </Collapse> 
      </Card>     
      </Flex>
      </Modal>
      </div>
  )
}

export default AboutCartModel
