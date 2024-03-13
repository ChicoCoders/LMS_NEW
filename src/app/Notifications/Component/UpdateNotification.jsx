// UpdateNotification.jsx
import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
const { Option } = Select;

const UpdateNotification = ({ visible, onUpdate, onCancel, notification }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Update Notification"
            okText="Update"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onUpdate(notification.id, values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form form={form} layout="vertical" initialValues={notification}>
                <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the type!' }]}>
                    <Select placeholder="Select Type">
                        <Option value="New Books">New Books</Option>
                        <Option value="New Journals">New Journals</Option>
                        <Option value="New ebooks">New eBooks</Option>
                        <Option value="Others">Others</Option>
                        {/* Add more options if needed */}
                    </Select>
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the description!' }]}>
                    <Input.TextArea rows={4} placeholder="Enter Description" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UpdateNotification;
