//
// import { Button, Card ,Modal, Checkbox, Form, Input,Space} from "antd";
// import React, { useState ,useRef} from 'react';
//
// // const onFinish = (values) => {
// //     console.log('Success:', values);
// // };
// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };
//
// const { TextArea } = Input;
//
// // const onFinish = (values) => {
// //     console.log('Received values:', values);
// //     // Reset form fields
// //     form.resetFields();
// //     // Or using form ref
// //     // formRef.current.resetFields();
// // };
//
// const layout = {
//     labelCol: {
//         span: 8,
//     },
//     wrapperCol: {
//         span: 16,
//     },
// };
//
// const tailLayout = {
//     wrapperCol: {
//         offset: 8,
//         span: 16,
//     },
// };
// function AddNotification1() {
//     const onFinish = (values) => {
//         console.log(values);
//     };
//     const onReset = () => {
//         form.resetFields();
//     };
//
//     const [form] = Form.useForm();
//     const formRef = useRef(null);
//
//
//
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const showModal = () => {
//         setIsModalOpen(true);
//     };
//     const handleOk = () => {
//         setIsModalOpen(false);
//     };
//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };
//     return (
//         <div>
//
//
//             <Button type="primary" onClick={showModal}>
//                 New
//             </Button>
//             <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 <Form
//
//
//                     form={form}
//                     ref={formRef}
//                     onFinish={onFinish}
//
//                     layout="vertical"
//                     name="basic"
//                     labelCol={{
//                         span: 8,
//                     }}
//                     wrapperCol={{
//                         span: 30,
//                     }}
//                     // style={{
//                     //     maxWidth: 600,
//                     // }}
//                     initialValues={{
//                         remember: false
//                     }}
//                     //onFinish={onFinish}
//                     onFinishFailed={onFinishFailed}
//                     autoComplete="off"
//                 >
//                     <Form.Item
//                         label="To"
//                         name="To"
//
//                         rules={[
//                             {
//                                 required: false,
//                                 message: 'Please input your username!',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>
//
//                     <Form.Item
//                         label="Subject"
//                         name="Subject"
//                         rules={[
//                             {
//                                 required: false,
//                                 message: 'Please input your username!',
//                             },
//                         ]}
//                     >
//                         <Input placeholder="Enter subject" />
//                     </Form.Item>
//
//
//
//
//                     <Form.Item label="Content">
//                         <TextArea rows={4} placeholder="write your notice here" />
//                     </Form.Item>
//
//
//
//
//
//
//                   {/*Item  <Form.Item*/}
//                   {/*      wrapperCol={{*/}
//                   {/*          offset: 8,*/}
//                   {/*          span: 16,*/}
//                   {/*      }}*/}
//                   {/*  >*/}
//
//                   {/*  </Form.Item>*/}
//                 </Form>
//             </Modal>
//
//         </div>
//     );
// }
// export default AddNotification1;

import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const { TextArea } = Input;

const AddNotification1 = ({addingNotification}) => {
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
        form.setFieldsValue({ Content: '' });
        setVisible(false); // Hide the modal after form submission
      //  console.log(values.To,values.Content)
       // addingNotification(values.To,values.Content);

    };


    return (
        <>
            <Button type="primary" onClick={showModal} style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff', }}>
                New
            </Button>
            <Modal
                title="Add New Notification"
                visible={visible}
                onCancel={handleCancel}
                footer={null} // Hide the default footer buttons
            >
                <Form
                    layout="vertical"
                    form={form}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >


                                            <Form.Item
                                                label="To"
                                                name="To"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: 'Select Recipient',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Enter subject" />
                                            </Form.Item>




                                            <Form.Item label="Content" name="Content">
                                                <Input.TextArea rows={4} placeholder="write your notice here" />
                                            </Form.Item>



                    <Form.Item style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit"  >
                            Send
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};

export default AddNotification1

