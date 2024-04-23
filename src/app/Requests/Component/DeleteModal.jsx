'use client'
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'
import ReturnForam from './ReturnForam'
import axioinstance from '../../Instance/api_instance';



function DeleteModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const showSuccessModal = () => {
        Modal.success({
            title: 'Success',
            content: 'Request is cancelled successfully',
        });
    };

    const handleOk = () => {
        setLoading(true);
        try{
            
       axioinstance.get(`Request/RemoveRequest?id=${props.recordData.id}`);
       setLoading(false);
       setTimeout(() => {
        props.close();
        props.fetchData();
    }, 3000);
      
        }catch(error){
            setLoading(false);
            console.log(error);
        }




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

                style={{ maxWidth: '90%' }}
                width='auto'
                open={props.open1}
                centered
                title={<Flex style={{padding:'20px 15px 10px 10px'}}>"Do You need to cancle Request"</Flex>}
                onCancel={handleCancel}
                footer={[
                    <Row gutter={[10]}>
                        <Col xs={12}>
                            <Button block size='small' shape='round' key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Yes
                            </Button>
                        </Col>
                        <Col xs={12}>
                            <Button block size='small' shape='round' key="back" onClick={handleCancel}>
                                No
                            </Button>
                        </Col>
                    </Row>

                ]}

            >
            </Modal>

        </div>
    )
}

export default DeleteModal
