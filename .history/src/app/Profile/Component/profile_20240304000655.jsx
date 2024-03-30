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
  },
  // Other items...
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
          {/* Image and Descriptions go here */}
        </Row>

      </Card>
      <EditModal open1={openModal} close1={closeModal} open={modalState} />
    </Flex>
  );
}

export default Profile;
