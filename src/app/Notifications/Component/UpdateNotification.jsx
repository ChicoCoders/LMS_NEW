// UpdateNotification.jsx
import React, { useState } from 'react';
import { Modal, Form, Input, Select, Checkbox, Flex, Switch } from 'antd';
const { Option } = Select;


const UpdateNotification = ({ visible, onUpdate, onCancel, notification }) => {
    const [form] = Form.useForm();
    const[enable,setEnable]=useState(true);
    return (
        <Modal
            visible={visible}
            title="Update Notification"
            okText="Setup"
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
            <br></br> 
            <Switch defaultChecked  onChange ={ (checked) => setEnable(checked)}/>
                <br></br>
                <br></br>
              <Flex justify='space-between'>
                <Checkbox disabled={!enable} value="book">New Books</Checkbox>
                <Checkbox disabled={!enable} value="ebooks">New Ebboks</Checkbox>
                <Checkbox disabled={!enable} value="journals">New Journals</Checkbox>
                <Checkbox disabled={!enable} vlaue="others">Others</Checkbox>
                </Flex>
                <br></br>
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the description!' }]}>
                    <Input.TextArea disabled={!enable} rows={4} placeholder="Enter Description" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UpdateNotification;
