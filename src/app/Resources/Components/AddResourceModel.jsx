'use client'
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'

import ResourcesAddForm from './ResourcesAddForm';



function ReturnModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    
    const submitForm= ()=>{
        axios.post('http://localhost:5164/api/Resource/AddResource',{
            isbn:form.getFieldsValue('isbn'),
            title:form.getFieldsValue('title'),
            auther:form.getFieldsValue('auther'),
            type:form.getFieldsValue('type'),
            quantity:form.getFieldsValue('quantity'),
            year:form.getFieldsValue('year'),
            price:form.getFieldsValue('price'),
            pagecount:form.getFieldsValue('pagecount'),
            addedOn:form.getFieldsValue('addedOn'),
            addedByID:form.getFieldsValue('addedByID'),
            category:form.getFieldsValue('category'),
            imageURL:form.getFieldsValue('imageURL'),
            location:form.getFieldsValue('location'),
            description:form.getFieldsValue('description'),
         })
         .then((response)=>{
            setTimeout(() => {
                    
                setLoading(false);
                showSuccessModal();
                props.close();
                form.resetFields();
            }, 3000);
            alert(response.data.isbn);
         },(error)=>{
            setLoading(false);
         alert(error);} )
                 
        
}

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
                submitForm();
               
               
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
                height='80%'
                centered
                title={<Flex>Add Resources</Flex>}
                open={props.open1}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        <Button    key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Add Resource
                        </Button>
                        
                        <Button    key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        
                        </>  
                ]}
                
            >
                <ResourcesAddForm form1={form} data1={props.data1}/>
            </Modal>
        
        </div>
    )
}

export default ReturnModal
