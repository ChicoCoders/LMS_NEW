import React, { useState } from 'react';
import { Modal, Form, Input, Button,Switch } from 'antd';

const { TextArea } = Input;

const RemindNotification1 = () => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Perform form submission logic here
        form.resetFields(); // Reset the form fields
        form.setFieldsValue(false);
        setVisible(false); // Hide the modal after form submission
    };

    return (
        <>
            {/*remindin button*/}
            <Button type="primary" onClick={showModal} style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff', }}>
                Reminding
            </Button>
            <Modal //modal for remind notification
                title="Remind Notification"
                visible={visible}
                onCancel={handleCancel}
                footer={null} // Hide the default footer buttons
            >
                {/*form for remind notification*/}
                <Form
                    layout="vertical"
                    form={form}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}//make onFinish function to handle the form submission
                >

                    <Form.Item label="Switch" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item
                        label="Subject"
                        name="Subject"
                        rules={[
                            {
                                required: false,
                                message: 'Enter type',
                            },
                        ]}
                    >
                        <Input placeholder="Enter subject" />
                    </Form.Item>

                    <Form.Item label="Description" name="Description">
                        <Input.TextArea rows={4} placeholder="Enter Description" />
                    </Form.Item>


                    <Form.Item style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};

export default RemindNotification1

