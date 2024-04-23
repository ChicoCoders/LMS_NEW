'use client'
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import { UserContext } from '../../Context/Context';
import { HubConnectionBuilder,LogLevel } from '@microsoft/signalr';
const { Option } = Select;

const AddNotification = ({ fetchData }) => {const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const[respient,setrecepient]=useState("all")//usestate for select other
  const [messages, setMessages] = useState([]);//usestate for message
   
    const [connection, setConnection] = useState(null);
    const user=React.useContext(UserContext).user;
    
    useEffect(() => {
      const connect = new HubConnectionBuilder()
        .withUrl("http://localhost:5164/Hubs/MyHub")
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      setConnection(connect);
      connect
        .start()
        .then(() => {
         
          connect.on("ReceiveMessage", (sender, content, sentTime) => {
            setMessages((prev) => [...prev, { sender, content, sentTime }]);
          });
          connection.invoke("JoinRoom","all");
          connection.invoke("JoinRoom",user.userName);
          connection.invoke("JoinRoom",user.userType);
          connect.invoke("RetrieveMessageHistory");
        })
        .catch((err) =>
          console.error("Error while connecting to SignalR Hub:", err)
        );

      
      return () => {
        if (connection) {
          connection.off("ReceiveMessage");
        }
      };
    }, [user]);

    

    const sendMessage = async () => {
      if (connection) {
        await connection.send("SendMessage", 
        {userName :respient=="other"?form.getFieldValue('userId'):respient,
        subject : "New Announcement",
        description:form.getFieldValue('description') });
      }
      fetchData();
      onCancel();
    };

    const showModal = () => {
        setVisible(true);
    };



    const onCancel = () => {
        setVisible(false);
    };

  
  return (
      <>
        <Button type="primary" onClick={showModal} style={{ marginRight: '10px', width: '150px', backgroundColor: '#001628', color: '#ffff', }}>
            New
        </Button>

        <Modal
            visible={visible}
            title="Add New Notification"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                  .validateFields()
                  .then((values) => {
                    sendMessage();
                    form.resetFields();
                  })
                  .catch((info) => {
                    console.log('Validate Failed:', info);// add error handling
                  });
            }}
        >
          <Form form={form} layout="vertical" name="form_in_modal">
            <Form.Item name="to" label="To" rules={[{ required: true, message: 'Please select the recipient!' }]}>
            <Select placeholder="Select Recipient" onSelect={(value)=>setrecepient(value)} >  {/*usestate for select other*/}

                <Option value="all">All</Option>
                <Option value="admin">Admin</Option>
                <Option value="patron">Patrons</Option>
                <Option value="other">Others</Option>
                {/* Add more options based on your notification recipients */}
              </Select>
            </Form.Item>
            {
              (respient=="other")?
                  <Form.Item name="userId" label="User Name" rules={[{ required: true, message: 'Please select username!' }]} >
                    <Input placeholder="Enter User Name" />
                  </Form.Item>
                  :<div></div>
            }

            <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the notification description!' }]}>
              <Input.TextArea rows={4} placeholder="Enter Description" />
            </Form.Item>
          </Form>
        </Modal>

      </>

  );
};

export default AddNotification;
