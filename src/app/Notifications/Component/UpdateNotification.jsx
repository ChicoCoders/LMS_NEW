// Importing necessary modules from Ant Design and React
import React, { useState } from 'react';
import { Modal, Form, Input, Select, Checkbox, Flex, Switch } from 'antd';
const { Option } = Select;

// UpdateNotification component definition
const UpdateNotification = ({ visible, onUpdate, onCancel, notification }) => {
    // State to manage form instance
    const [form] = Form.useForm();
    // State to manage the enable/disable state of the form fields
    const [enable, setEnable] = useState(true);

    return (
        // Modal for updating notification
        <Modal
            visible={visible}
            title="Update Notification"
            okText="Setup"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                // Validating form fields before submission
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields(); // Resetting form fields after successful submission
                        onUpdate(notification.id, values); // Callback function to handle update
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info); // Logging validation errors to the console
                    });
            }}
        >
            <Form form={form} layout="vertical" initialValues={notification}>
                {/* Switch to enable/disable form fields */}
                <br></br>
                <Switch defaultChecked onChange={(checked) => setEnable(checked)} />
                <br></br>
                <br></br>
                {/* Checkbox group for selecting notification types */}
                <Flex justify='space-between'>
                    <Checkbox disabled={!enable} value="book">New Books</Checkbox>
                    <Checkbox disabled={!enable} value="ebooks">New Ebboks</Checkbox>
                    <Checkbox disabled={!enable} value="journals">New Journals</Checkbox>
                    <Checkbox disabled={!enable} value="others">Others</Checkbox>
                </Flex>
                <br></br>
                {/* Textarea for entering notification description */}
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the description!' }]}>
                    <Input.TextArea disabled={!enable} rows={4} placeholder="Enter Description" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UpdateNotification; // Exporting UpdateNotification component
