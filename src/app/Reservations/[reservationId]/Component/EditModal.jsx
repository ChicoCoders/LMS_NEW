import { Button, DatePicker, Flex, Form, Input,message } from 'antd'
import Modal from 'antd/es/modal/Modal'
import moment from 'moment';

import React, { useState } from 'react'
import axioinstance from '../../../Instance/api_instance';

function EditModal(props) {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Extend Date Successfully!',
        });
      };
      const errormsg = () => {
        messageApi.open({
          type: 'error',
          content: 'Extend Date is Failed',
        });
      };


    const [formState, changeFormState] = useState(true);
    const[date,setDate] = useState("");
    const[loading,setLoading] = useState(false);

   
    const [form] = Form.useForm();

    const extend =async()=>{
            try{
                
                setLoading(true);
                const response=await axioinstance.put(`http://localhost:5164/api/Reservation/ExtendDue?id=${props.reservationId}&due=${date}`);
                setTimeout(() => {
                    setLoading(false);
                    props.closeModal();
                    form.resetFields();
                    setDate("");
                    props.fetchData()
                    success();
                }, 3000);
                
                
            }catch(error){
                setLoading(false);
                console.log("sadas");
                errormsg();
            }
    }

    return (
        <div>
            {contextHolder}
            <Modal
                mask={true}
                maskClosable={false}
                
                title="Extend Due Date"
                width="300px"
                open={props.modalState}
                onCancel={props.closeModal}
                
                footer={[
                    <Flex wrap='wrap' gap="5px">
                        <Button style={{ flex: 1 }} size='small' shape='round' key="submit" type="primary" disabled={(formState||date=="" )}  onClick={extend} loading={loading}>
                            Save
                        </Button>
                        <Button style={{ flex: 1 }} size='small' shape='round' key="back" onClick={props.closeModal}>
                            Cancel
                        </Button>

                    </Flex>
                ]}
            >

                <div style={{
                    maxHeight: "350px",
                    padding: '20px 10px 0 0',
                    overflowY: 'auto',
                }}>
                    <Form form={form}
                       
                        size='small'
                        layout='vertical'
                        name="nest-messages"

                       >

                       
                        <Form.Item
                            name='dueDate'
                           
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        ><DatePicker  onChange={(e, s) => {setDate(s); changeFormState(false);}} disabledDate={(current) => current.isBefore(moment())}/>
                        </Form.Item>
                       
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

export default EditModal
