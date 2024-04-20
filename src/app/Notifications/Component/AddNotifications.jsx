// Importing necessary modules from Ant Design and React
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
const { Option } = Select;

// AddNotification component definition
const AddNotification = ({ visible, onCreate, onCancel }) => {
  // State to manage form instance
  const [form] = Form.useForm();
  // State to manage the selected recipient type
  const [recipient, setRecipient] = useState("student");

  // Logging the selected recipient to the console
  console.log(recipient);

  return (
      // Modal for adding a new notification
      <Modal
          visible={visible}
          title="Add New Notification"
          okText="Add"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            // Validating form fields before submission
            form
                .validateFields()
                .then((values) => {
                  form.resetFields(); // Resetting form fields after successful submission
                  onCreate(values); // Callback function to handle creation of new notification
                })
                .catch((info) => {
                  console.log('Validate Failed:', info); // Logging validation errors to the console
                });
          }}
      >
        {/* Form for adding a new notification */}
        <Form form={form} layout="vertical" name="form_in_modal">
          {/* Dropdown to select recipient */}
          <Form.Item name="to" label="To" rules={[{ required: true, message: 'Please select the recipient!' }]}>
            <Select placeholder="Select Recipient" onSelect={(value)=>setRecipient(value)} >
              <Option value="all">All</Option>
              <Option value="admin">Admin</Option>
              <Option value="patron">Patrons</Option>
              <Option value="other">Others</Option>
              {/* Add more options based on your notification recipients */}
            </Select>
          </Form.Item>
          {/* Conditionally rendering input field for username based on selected recipient */}
          {
            (recipient === "other") ?
                <Form.Item name="userId" label="User Name" rules={[{ required: true, message: 'Please select username!' }]}>
                  <Input placeholder="Enter User Name" />
                </Form.Item>
                : <div></div>
          }
          {/* Textarea for entering notification description */}
          <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
            <Input.TextArea rows={4} placeholder="Enter Description" />
          </Form.Item>
        </Form>
      </Modal>
  );
};

export default AddNotification; // Exporting AddNotification component
