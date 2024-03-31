import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
const { Option } = Select;

const AddNotification = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const[respient,setrecepient]=useState("student")
  console.log(respient)
  return (
    <Modal
      visible={visible}
      title="Add New Notification"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item name="to" label="To" rules={[{ required: true, message: 'Please select the recipient!' }]}>
          <Select placeholder="Select Recipient" onSelect={(value)=>setrecepient(value)} >
            
            <Option value="all">All</Option>
            <Option value="admin">Admin</Option>
            <Option value="patron">Patrons</Option>
            <Option value="other">Others</Option>
            {/* Add more options based on your notification recipients */}
          </Select>
        </Form.Item>
        {
          (respient=="other")?
          <Form.Item name="userId" label="User Name" rules={[{ required: true, message: 'Please select username!' }]}>
          <Input placeholder="Enter User Name" />
        </Form.Item>
        :<div></div>
        }
        
        <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
          <Input.TextArea rows={4} placeholder="Enter Description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNotification;
