'use client'
import { Button, Col, Flex, Form, Drawer, Row,Modal } from 'antd'
import React, { useState } from 'react'
import IssueForam from './IssueForam'
import axios from 'axios';



function IssueModal(props) {
    const [loading, setLoading] = useState(false);
    const[date,setDate]=useState("");
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
             dueDate:  date 
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
                    
                            <Button block size='medium'  key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Issue
                            </Button>
                        
                ]}

            >
                
                
                <IssueForam date={setDate} form1={form} data={props.data} />
            </Drawer>

        </div>
    )
}

export default IssueModal
