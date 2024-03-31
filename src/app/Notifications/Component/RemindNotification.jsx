// RemindNotification.jsx
import React, { useState } from 'react';
import { Modal, Form, Select, DatePicker, TimePicker, Button, Input, Switch } from 'antd';  // Add 'Input' to the import statement
const { Option } = Select;

const RemindNotification = ({ visible, onRemind, onCancel }) => {
    const [form] = Form.useForm();
    const[enable,setEnable]=useState(true);
    console.log(enable);
    return (
        <Modal
            visible={visible}
            title="Remind Notification"
            okText="Setup"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields().then((values) => {
                    form.resetFields();
                    onRemind(values);
                });
            }}
        >
            
            <Form form={form} layout="vertical" name="form_in_modal">
            <Switch defaultChecked  onChange ={ (checked) => setEnable(checked)}/>
            <br></br>
            <br></br>
                <Form.Item  name="subject" label="Subject" rules={[{ required: true, message: 'Please set a subject' }]}>
                    <Input disabled={!enable} placeholder="Enter Type" />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
                    <Input.TextArea disabled={!enable}  rows={4} placeholder="Enter Description" />
                </Form.Item>
                
            </Form>
        </Modal>
    );
};

export default RemindNotification;
