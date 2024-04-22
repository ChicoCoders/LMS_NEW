'use client'
import { Button, Col, ConfigProvider, Drawer, Flex, Form, Modal, Row, message } from 'antd'
import React, { useState } from 'react'
import ReturnForam from './ReturnForam'
import Cookies from 'js-cookie';
import axioinstance from "../../Instance/api_instance";




function ReturnModal(props) {
    
    const token = Cookies.get('jwt');
    const [loading, setLoading] = useState(false);
    const[date,setData]=useState("");
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
    

    

    async function fetchData() { // Function to fetch data from server'        
        // Sending POST request to fetch data based on search parameters
        
       
        await axioinstance.post("Reservation/Returnbook",{
                reservationNo: props.recordData.reservationNo,
                returnDate: date,
                returnby: String(form.getFieldValue('returnid')),
                penalty: 0,
                email:email
            }
        )
            .then(response => {
                const data = response.data; // Extracting data from response
                console.log(data);
                setTimeout(() => {
                    setLoading(false);
                    // fetchData(form);
                    successModal();
                    props.close();
                    form.resetFields();
                    props.fetchData(props.type);

                }, 3000);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                errorModal(String(error.response.data).split('\n')[0]);
               // errorModal(String(error.response.data).split('\n')[0]);
                
            });

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
                
                title={<Flex  justify='space-between'>Return{props.recordData.status == 'overdue' ? (<Button style={{ margin: '0 0 0 20px' }} shape='round'  size='small' danger>OverDue</Button>) : null}</Flex>}
                onOk={handleOk}
                onClose={handleCancel}
                footer={[
                   
                    
                   
                            <Button block size='medium'  key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Return
                            </Button>
                            

                ]}

            >
                <ReturnForam form1={form} data1={props.recordData} date={setData} setEmail={setEmail} email={email}/>
            </Drawer>
           
        </div>
    )
}

export default ReturnModal
