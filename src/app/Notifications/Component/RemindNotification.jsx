// Importing necessary modules from Ant Design and React
import React, { useState } from 'react';
import { Modal, Form, Select, DatePicker, TimePicker, Button, Input, Switch } from 'antd'; // Added 'Input' to the import statement
const { Option } = Select;

// RemindNotification component definition
const RemindNotification = ({ visible, onRemind, onCancel }) => {
    // State to manage form instance
    const [form] = Form.useForm();
    // State to manage the enable/disable state of the form fields
    const [enable, setEnable] = useState(true);

    // Logging the enable/disable state to the console
    console.log(enable);

    return (
        // Modal for reminding notification
        <Modal
            visible={visible}
            title="Remind Notification"
            okText="Setup"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                // Validating form fields before submission
                form.validateFields().then((values) => {
                    form.resetFields(); // Resetting form fields after successful submission
                    onRemind(values); // Callback function to handle reminder setup
                });
            }}
        >
            <Form form={form} layout="vertical" name="form_in_modal">
                {/* Switch to enable/disable form fields */}
                <Switch defaultChecked onChange={(checked) => setEnable(checked)} />
                <br></br>
                <br></br>
                {/* Input field for setting subject */}
                <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Please set a subject' }]}>
                    <Input disabled={!enable} placeholder="Enter Type" />
                </Form.Item>
                {/* Textarea for entering notification description */}
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
                    <Input.TextArea disabled={!enable} rows={4} placeholder="Enter Description" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RemindNotification; // Exporting RemindNotification component
