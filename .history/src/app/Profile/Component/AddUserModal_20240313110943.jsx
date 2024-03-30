'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import UserAddForm from './UserAddForm';
const AddUserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal1 = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal1}>
        Edit details
      </Button>
      <Modal title="Edit details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      mask={true}
                maskClosable={false}

                style={{maxWidth:'95%'}}
                width='80%'
                centered
                title={<Flex>Add User</Flex>}
                open={props.open1}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        <Button    key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Add User
                        </Button>
                        
                        <Button    key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        
                        </>  
                ]}
                <UserAddForm form1={form} data1={props.data1}/>
      </Modal>
    </>
  );
};
export default AddUserModal;
