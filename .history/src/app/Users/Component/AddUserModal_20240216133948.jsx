'use client'
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'

import UserAddForm from './UserAddForm';



function ReturnModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const showSuccessModal = () => {
        Modal.success({
            title: 'Success',
            content: 'Successfully Added',
        });
    };

    const handleOk = () => {
        form.validateFields()
            .then(() => {
                setLoading(true);

                setTimeout(() => {
                    
                    setLoading(false);
                    showSuccessModal();
                    props.close();
                    form.resetFields();
                }, 3000);
               
               
            })

            .catch(() => {
                console.log("Validate Failed:");
            });




    };
    const handleCancel = () => {
        props.close();
        form.resetFields();
    }
    
    return (
        <div>
            
            <Modal
                mask={true}
                maskClosable={false}

                style={{maxWidth:'95%'}}
                width='80%'
                centered
                title={<Flex>Add User</Flex>}
                open={props.open1}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        <Button    key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Add User
                        </Button>
                        
                        <Button    key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        
                        </>  
                ]}
                
            >
                <UserAddForm form1={form} data1={props.data1}/>
            </Modal>
        
        </div>
    )
}

export default ReturnModal
