'use client'
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'
import IssueForam from './IssueForam'
import axios from 'axios';



function IssueModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
   

    const showSuccessModal = () => {
        Modal.success({
            title: 'Success',
            content: 'Successfully Issue the Resource',
        });
    };

    const errorModal = (p) => {
        Modal.error({
          title: 'Issue Book Unseccessfull',
          content: p,
        });
      };


    async function fetchData() { // Function to fetch data from server
        try {
          // Sending POST request to fetch data based on search parameters
          
          const response = await axios.post('http://localhost:5164/api/Reservation/Issuebook', {
             isbn: String(form.getFieldValue('resourceId')),
             borrowerID:String(form.getFieldValue('borrowerId')) ,
             issuedID:String (form.getFieldValue('issuerId')),
             dueDate: "2021.03.05"
          });
          const data = response.data; // Extracting data from response
          setTimeout(() => {
            setLoading(false);
           // fetchData(form);
            showSuccessModal();
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
                fetchData();
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

                style={{ maxWidth: '95%' }}
                width='auto'
                open={props.open1}
                centered
                title="Issue Book"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Row gutter={[10]}>
                        <Col xs={12}>
                            <Button block size='small' shape='round' key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Issue
                            </Button>
                        </Col>
                        <Col xs={12}>
                            <Button block size='small' shape='round' key="back" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>

                ]}

            >
                
                <IssueForam form1={form} data1={props.data1} />
            </Modal>

        </div>
    )
}

export default IssueModal
