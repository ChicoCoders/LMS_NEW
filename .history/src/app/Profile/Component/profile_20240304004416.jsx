import { Button, Col, Descriptions, Flex, Image, Row, Popconfirm, message } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import EditModal from './EditModal';
import { DeleteOutlined } from '@ant-design/icons';

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
    span: 1, // Adjusted span value
  },
  {
    key: '2',
    label: 'User Name',
    children: '978-1234567890',
    span: 1, // Adjusted span value
  },
  {
    key: '3',
    label: 'Email',
    children: 'The Taranmituin Chronicles',
    span: 2, // Adjusted span value to span two columns
  },
  {
    key: '4',
    label: 'NIC',
    children: 'U789012',
    span: 1, // Adjusted span value
  },
  {
    key: '5',
    label: 'Date of Birth',
    children: 'Jane Doe',
    span: 1, // Adjusted span value
  },
  {
    key: '6',
    label: 'Phone Number',
    children: 'Librarian123',
    span: 1, // Adjusted span value
  },
  {
    key: '7',
    label: 'Added By',
    children: '2024-02-04',
    span: 1, // Adjusted span value
  },
  {
    key: '8',
    label: 'Penalty',
    children: '5',
    span: 1, // Adjusted span value
  },
];

function Profile() {
  const [modalState, changeModalState] = useState(false);

  const openModal = () => {
    changeModalState(true);
  };

  const closeModal = () => {
    changeModalState(false);
  };

  return (
    <Flex style={{ width: '100%' }} justify='center'>
      <Card bordered style={{ borderWidth: 3, width: '80%' }}>
        <Flex justify='space-between'>
          <div>
            <Button type='primary' danger style={{ margin: " 0 20px 20px 0" }} shape='round'>Admin</Button>
            <Button type='primary' shape='round'>Not Borrowed</Button>
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
              <Button type='primary' shape='circle' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </div>
        </Flex>

        <Row gutter={[30, 30]} align="middle" justify="center">
          <Col md={6} sm={24} xs={24}>
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Picture of the author"
              width="100%"
              style={{ borderRadius: '50%' }}
            />
          </Col>
          <Col md={18} sm={24} xs={24}>
            <Descriptions title={<div>User Details<Link href="#" onClick={openModal}><span><DeleteOutlined /></span></Link></div>} layout="horizontal" column={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 2,
            }} items={items} />
          </Col>
        </Row>
      </Card>
      <EditModal open1={openModal} close1={closeModal} open={modalState} />
    </Flex>
  );
}

export default Profile;
