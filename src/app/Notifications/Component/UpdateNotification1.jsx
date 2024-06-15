import React, { useState } from 'react';
import { Modal, Form, Input, Button,Switch ,Checkbox,Row,Col} from 'antd';

const { TextArea } = Input;

const UpdateNotification1 = () => {
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
            <Button type="primary" onClick={showModal} style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff', }}>
                Updates
            </Button>
            {/* Modal to update notification */}
            <Modal
                title="Update Notification"
                visible={visible}
                onCancel={handleCancel}
                footer={null} // Hide the default footer buttons

            >
                {/* Form inside the modal */}
                <Form
                    layout="vertical"
                    form={form}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    {/* Switch component with a label */}
                    <Form.Item label="Switch" valuePropName="checked">
                        <Switch />
                    </Form.Item>


                    {/* Checkbox group for selecting notification preferences */}
                    <Form.Item>
                        <Checkbox.Group style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Checkbox value="A">New Books</Checkbox>
                            <Checkbox value="B">New Ebooks</Checkbox>
                            <Checkbox value="C">New Journals</Checkbox>
                            <Checkbox value="D">Others</Checkbox>
                        </Checkbox.Group>
                    </Form.Item>




                    {/* Description input field */}
                    <Form.Item label="Description" name="Description">
                        <Input.TextArea rows={4} placeholder="Enter Description" />
                    </Form.Item>








                    {/* Submit button for the form */}
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

export default UpdateNotification1

