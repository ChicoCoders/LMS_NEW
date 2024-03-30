import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
const { Option } = Select;

const AddNotification = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

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
          <Select placeholder="Select Recipient">
            <Option value="All">All</Option>
            <Option value="Faculty">Faculty</Option>
            <Option value="Students">Students</Option>
            {/* Add more options based on your notification recipients */}
          </Select>
        </Form.Item>
        <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the notification type!' }]}>
          <Input placeholder="Enter Type" />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
          <Input.TextArea rows={4} placeholder="Enter Description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNotification;
