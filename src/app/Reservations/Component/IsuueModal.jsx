'use client'
import { Button, Flex, Form, Modal } from 'antd'
import React, { useState } from 'react'
import IssueForam from './IssueForam'


function IsuueModal(props) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const handleOk = () => {

        form.validateFields()
            .then(() => {
                setLoading(true);

                setTimeout(() => {
                    setLoading(false);
                    props.close();
                }, 3000);
                form.resetFields();

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
                width="auto"
                open={props.open1}
                centered
                title="Issue Resource"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Flex wrap='wrap' gap="5px">
                        <Button style={{ flex: 1 }} size='small' shape='round' key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Issue
                        </Button>
                        <Button style={{ flex: 1 }} size='small' shape='round' key="back" onClick={handleCancel}>
                            Cancel
                        </Button>

                    </Flex>
                ]}
            >
                <IssueForam form1={form} />
            </Modal>
        </div>
    )
}

export default IsuueModal
