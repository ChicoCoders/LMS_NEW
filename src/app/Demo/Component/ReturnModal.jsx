'use client'
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'
import ReturnForam from './ReturnForam'



function ReturnModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const showSuccessModal = () => {
        Modal.success({
            title: 'Success',
            content: 'Successfully Return the Resource',
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
                style={{maxWidth:'95%'}}
                width='auto'
                open={props.open1}
                centered
                title={<Flex justify='space-between' style={{margin:'0 20px 0 0'}}>Return{props.data1.status=='borrowed'? (<Button  shape='round' type='primary' size='small' danger>OverDue</Button>):null}</Flex>}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Row gutter={[10]}>
                        <Col xs={12}>
                        <Button block  size='small' shape='round' key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Return
                        </Button>
                        </Col>
                        <Col xs={12}>
                        <Button block  size='small' shape='round' key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        </Col>
                        </Row>
                        
                ]}
                
            >
                <ReturnForam form1={form} data1={props.data1}/>
            </Modal>
        
        </div>
    )
}

export default ReturnModal
