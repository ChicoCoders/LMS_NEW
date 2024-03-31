
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
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
      <Button type="primary" style={{margin:" 0 20px 20px 0"}} shape='round' onClick={showModal1}>
        Edit details
      </Button>
      <Modal title="Edit details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        
      </Modal>
    </>
  );
};
export default AddUserModal;
