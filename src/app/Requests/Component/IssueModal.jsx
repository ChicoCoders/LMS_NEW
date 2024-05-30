'use client'
import { Button, Col, Flex, Form, Drawer, Row,Modal, message } from 'antd'
import React, { useEffect, useState } from 'react'
import IssueForam from './IssueForam'
import axios from 'axios';
import axioinstance from '../../Instance/api_instance';



function IssueModal(props) {
    const [loading, setLoading] = useState(false);
    const[date,setDate]=useState("");
    const [email, setEmail] = useState(true);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();


    const successModal = () => {
      messageApi.open({
        type: 'success',
        content: 'Book issued successfully',
      });
    };
    const errorModal = (e) => {
      messageApi.open({
        type: 'error',
        content: e,
      });
    };


    async function fetchData() { // Function to fetch data from server
        try {
          // Sending POST request to fetch data based on search parameters
          const response = await axioinstance.post('Reservation/Issuebook', {
             isbn: String(form.getFieldValue('resourceId')),
             borrowerID:String(form.getFieldValue('borrowerId')) ,
             issuedID:String (form.getFieldValue('issuerId')),
             dueDate:  date ,
             email:email,
             requestId:props.data.id
          });
          const data = response.data; // Extracting data from response
          setTimeout(() => {
            setLoading(false);
           // fetchData(form);
            successModal();
            props.close();
            form.resetFields();
        }, 3000);
        } catch (error) {
          setLoading(false);
          errorModal(String(error.response.data).split('\n')[0]);
          console.log(error);
        }
      }
                
    const handleOk = () => {

        form.validateFields()
            .then(() => {
                setLoading(true);
                props.fetchData();
            })

            .catch(() => {
                console.log("Validate Failed:");
            });




    };

    const handleCancel = () => {
        props.close();
        form.resetFields();
    }

    useEffect(()=>{console.log(props.data.isbn)},[])
    return (
        <div>

            <Drawer
                mask={true}
                maskClosable={false}
                
               
                style={{ maxWidth: '95%' }}
                width='350px'
                open={props.open}
                centered
                title="Issue Book"
                onOk={handleOk}
                onClose={handleCancel}
                footer={[
                    
                            <Button block size='medium'  key="submit" type="primary" loading={loading} onClick={handleOk} >
                                Issue
                            </Button>
                        
                ]}

            >
                
                {contextHolder}
                <IssueForam date={setDate} form={form} data={props.data} setEmail={setEmail} email={email}/>
            </Drawer>

        </div>
    )
}

export default IssueModal
