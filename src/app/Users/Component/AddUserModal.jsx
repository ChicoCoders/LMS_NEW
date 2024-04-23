'use client'
import { Button, Col, Flex, Form, Modal, Row,Drawer } from 'antd'
import React, { useState } from 'react'
import axioinsatance from '../../Instance/api_instance'
import UserAddForm from './UserAddForm';



function ReturnModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const[date,setDate]=useState("");
    const[type,setType]=useState("patron");

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
        
       console.log(form.getFieldValue("nicno"));
        await axioinsatance.post("User/AddUser",{
                fName: form.getFieldValue("fname"),
                lName: form.getFieldValue("lname"),
                email: form.getFieldValue("email"),
                dob:date ,
                address: form.getFieldValue("address"),
                phoneNumber: form.getFieldValue("mobile"),
                nic: form.getFieldValue("nicno"),
                userType: type,
               
            }
        )
            .then(response => {
                const data = response.data; // Extracting data from response
                console.log(data);
                setTimeout(() => {
                    setLoading(false);
                    // fetchData(form);
                    showSuccessModal();
                    props.closeModal();
                    form.resetFields();
                    props.fetchData("all");

                }, 3000);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                errorModal("saf");
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
        props.closeModal();
        form.resetFields();
    }

    return (
        <div>
            
            <Drawer
                mask={true}
                maskClosable={false}

                style={{maxWidth:'95%'}}
                width='350px'
                centered
                title={<Flex>Add User</Flex>}
                open={props.open}
                onOk={handleOk}
                onClose={handleCancel}
                footer={[
                    <>
                        <Button block    key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Add User
                        </Button>
                        
                        </>  
                ]}
                
            >
                <UserAddForm setDate={setDate} form={form} data1={props.data1} setType={setType}/>
            </Drawer>
        
        </div>
    )
}

export default ReturnModal
