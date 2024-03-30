'use client'
import { Button, Col, Descriptions, Flex, Image, Row,Popconfirm,message } from 'antd'
import Card from 'antd/es/card/Card'
import Link from 'next/link';
import React, { useState } from 'react'
 import EditModal from './EditModal'
 import AddUserModal from './Component/AddUserModal';
 import { Modal, Upload } from 'antd';
import { HomeOutlined,EditOutlined,DeleteOutlined ,CameraOutlined ,UserOutlined } from '@ant-design/icons';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const confirm = (e) => {
    console.log(e);
    message.success('Deleted');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
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
    {
      key: '8',
      label: 'Penalty',
      children: '5',
      
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

  
function Profile() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'image.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error',
    // },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <CameraOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  //model
    
    const [modalState,changeModalState]=useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const openModal=()=>{
        changeModalState(true);
    }
    const closeModal=()=>{
      changeModalState(false);
    }
    const openPopup = () => {
      setPopupVisible(true);
    };
  
    const closePopup = () => {
      setPopupVisible(false);
    };


  return (
   
      <Flex  style={{width:'100%'}} justify='center'>
      <Card bordered style={{borderWidth:3,width:'80%'}}>
      <Flex justify='space-between'>
        <div>
      <Button type='primary' danger style={{margin:" 0 20px 20px 0"}} shape='round'>Patron</Button>
      <Button type='primary' shape='round'onClick={openModal}>Extend due date</Button>
      </div>
  <div>
<Popconfirm
    title="Delete the User"
    description="Delete?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
   <Button type='primary' shape='circle' icon={<DeleteOutlined/>}></Button>
  </Popconfirm>
  </div>
  

      </Flex>
      
        <Row gutter={[30,30]} align="middle" justify="center">
          <Col md={6} sm={24} xs={24} >
          <>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length == 0 ? uploadButton : null}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
            borderRadius:'50%',

          }}
          src={previewImage}
        />
      </Modal>
    </>
            {/* <Image 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Picture of the author"
            width="100%"
            style={{borderRadius:'50%'}}
          /> */}
          </Col>
          <Col md={18} sm={24} xs={24}>
            <Descriptions   title={<div>Profile<Link href=" " onClick={openModal}><span ><EditOutlined /></span></Link></div>} 
            layout="horizontal" column={{
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
              {/* <AddUserModal open={openPopup} close={closePopup}/> */}
              </Flex>
    
  )
}

export default Profile;
