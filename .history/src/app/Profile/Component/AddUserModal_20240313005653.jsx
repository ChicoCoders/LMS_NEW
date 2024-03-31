import React, { useState } from 'react';
import { Button, Form, Modal,Input } from 'antd';
import UserAddForm from './UserAddForm';

function AddUserModal({ open, close }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showSuccessModal = () => {
    Modal.success({
      title: 'Success',
      content: 'User Successfully Added',
    });
  };

  const handleOk = () => {
    form.validateFields()
      .then(() => {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          showSuccessModal();
          close(); // Call close function passed from Profile component
          form.resetFields();
        }, 3000);
      })
      .catch(() => {
        console.log("Validate Failed:");
      });
  };

  const handleCancel = () => {
    close(); // Call close function passed from Profile component
    form.resetFields();
  };

  return (
    <Modal
      mask={true}
      maskClosable={false}
      style={{ maxWidth: '95%' }}
      width='80%'
      centered
      title={<span>Add User</span>}
      visible={open} // Use the open prop to control visibility
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Add User
        </Button>,
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>
      ]}
    >
      <UserAddForm form1={form} />
    </Modal>
  );
}

export default AddUserModal;
// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import UserAddForm from './UserAddForm';
// const AddUserModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal1 = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal1}>
//         Edit details
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };
// export default AddUserModal;
