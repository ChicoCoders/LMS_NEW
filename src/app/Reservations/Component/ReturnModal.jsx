'use client'
import { Button, Col, Flex, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'
import ReturnForam from './ReturnForam'
import axios from 'axios';
import Cookies from 'js-cookie';
import axioinstance from "../../Instance/api_instance";




function ReturnModal(props) {
    const token = Cookies.get('jwt');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const showSuccessModal = () => {
        Modal.success({
            title: 'Success',
            content: 'Successfully Return the Resource',
        });
    };

    const errorModal = (p) => {
        Modal.error({
            title: 'Issue Book Unseccessfull',
            content: p,
        });
    };

    async function fetchData() { // Function to fetch data from server'        
        // Sending POST request to fetch data based on search parameters
        console.log(props.recordData.reservationNo);
        console.log(String(form.getFieldValue('returnid')));

        await axioinstance.post("Reservation/Returnbook",{
                reservationNo: props.recordData.reservationNo,
                returndate: "2024.03.22",
                returnby: String(form.getFieldValue('returnid')),
                penalty: 0
            }
        )
            .then(response => {
                const data = response.data; // Extracting data from response
                console.log(data);
                setTimeout(() => {
                    setLoading(false);
                    // fetchData(form);
                    showSuccessModal();
                    props.close();
                    form.resetFields();
                    props.fetchData(props.type);
                }, 3000);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                errorModal("saf");
               // errorModal(String(error.response.data).split('\n')[0]);
                
            });

        //   const response = await axios.post('http://localhost:5164/api/Reservation/Returnbook', {
        //      reservationNo:props.recordData.reservationNo,
        //      returndate: "2024.03.22",
        //      returnby:String(form.getFieldValue('returnid')) ,
        //      penalty:0
        //   },
        //   {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       // Assuming you have a JWT token for authentication
        //       'Authorization': `Bearer ${token}`,
        //     }
        //   });

        // const data = response.data; // Extracting data from response

        //     setTimeout(() => {
        //         setLoading(false);
        //         // fetchData(form);
        //         showSuccessModal();
        //         props.close();
        //         form.resetFields();
        //         props.fetchData(props.type);
        //     }, 3000);
        // } catch (error) {
        //     setLoading(false);
        //     errorModal("saf");
        //     // errorModal(String(error.response.data).split('\n')[0]);
        //     console.log(error);
        // }
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

                open={props.open}
                centered
                title={<Flex justify='space-between' style={{ margin: '0 20px 0 0' }}>Return{props.recordData.status == 'borrowed' ? (<Button shape='round' type='primary' size='small' danger>OverDue</Button>) : null}</Flex>}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Row gutter={[10]}>
                        <Col xs={12}>
                            <Button block size='small' shape='round' key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Return
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
                <ReturnForam form1={form} data1={props.recordData} />
            </Modal>

        </div>
    )
}

export default ReturnModal
