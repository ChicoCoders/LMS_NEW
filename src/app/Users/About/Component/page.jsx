import { Button, DatePicker, Flex, Form, Input } from 'antd'
import Modal from 'antd/es/modal/Modal'
import React, { useState } from 'react'

function page(props) {

    const [formState, changeFormState] = useState(false);

    const changeInForm = () => {
        changeFormState(true);
    }

    const [form] = Form.useForm();

    return (
        <div>
            <Modal
                title="Extend Due Date"
                width="300px"
                open={props.open}
                onOk={props.open}
                onCancel={props.close1}
                footer={[
                    <Flex wrap='wrap' gap="5px">
                        <Button style={{ flex: 1 }} size='small' shape='round' key="submit" type="primary" disabled={formState ? false : true}  >
                            Save
                        </Button>
                        <Button style={{ flex: 1 }} size='small' shape='round' key="back" onClick={props.close1}>
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

                        {/* <Form.Item
                            name="userID"
                            label="Borrower Id"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='issuerId'
                            label="Issued by"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        ><Input />
                        </Form.Item> */}
                        <Form.Item
                            name='dueDate'
                           
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        ><DatePicker  onChange={changeInForm} />
                        </Form.Item>
                        {/* <Form.Item
                            name='penaltyStatus'
                            label="Penalty"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        ><Input />
                        </Form.Item> */}
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

export default page
