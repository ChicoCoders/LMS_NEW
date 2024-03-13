// RemindNotification.jsx
import React from 'react';
import { Modal, Form, Select, DatePicker, TimePicker, Button, Input } from 'antd';  // Add 'Input' to the import statement
const { Option } = Select;

const RemindNotification = ({ visible, onRemind, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Remind Notification"
            okText="Remind"
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
                <Form.Item name="to" label="To" rules={[{ required: true, message: 'Please enter the recipient!' }]}>
                    {/*<Select placeholder="Select Recipient">*/}
                    {/*    <Option value="All">All</Option>*/}
                    {/*    <Option value="Faculty">Faculty</Option>*/}
                    {/*    <Option value="Students">Students</Option>*/}
                    {/*    /!* Add more options based on your notification recipients *!/*/}
                    {/*</Select>*/}
                    <Input placeholder="Enter recipient" />
                </Form.Item>
                <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the notification type!' }]}>
                    <Input placeholder="Enter Type" />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
                    <Input.TextArea rows={4} placeholder="Enter Description" />
                </Form.Item>
                <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select the date!' }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="time" label="Time" rules={[{ required: true, message: 'Please select the time!' }]}>
                    <TimePicker />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RemindNotification;
