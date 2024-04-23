import React, { useEffect, useState } from 'react';
import {Button, Flex, Input, Space, Form, Select, Pagination} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { AudioOutlined , UserOutlined,DownOutlined} from '@ant-design/icons';
import RemindNotification1 from "./RemindNotification1";
import UpdateNotification1 from "./UpdateNotification1";
import NotificationRaw from "./NotificationRaw";
import axioinstance from '../../Instance/api_instance';
import AddNotifications from "./AddNotifications";

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};



function NotificationCard1() {
    const [notifications, setNotifications] = useState([]);
    const[page,changepage]=useState(1);
    const[size,changeSize]=useState(0);

    const changingPage =(pNumber,size)=>{
        changepage(pNumber);
    }

    // Fetching data from the API
    async function fetchData() {
        try {
            const response = await axioinstance.get('Notification/GetNotificatons?username=all');
            const data = response.data.reverse(); // Reverse the data to show the latest notification first
            changeSize(data.length);
            setNotifications(data);
            // console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => { fetchData(); }, []);


    const removeNotification = async(id) => {
        try{
            const response=await axioinstance.delete(`Notification/RemoveNotification?id=${id}`);
            console.log(response);
            fetchData();
        }catch(e){
            console.log(e);
        }
    }

    const handleSelectChange = value => {
        console.log(value); // handle the selection change
    };
    const handleSearch = value => {
        console.log(value); // handle the search action
    };
    return (
        <div>
        <Flex gap="small" wrap="wrap" justify="space-between">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '23%' }}>

                <AddNotifications style={{ width: '150px' }}  fetchData={fetchData} />
                <RemindNotification1 style={{ width: '150px' }} />
                <UpdateNotification1 style={{ width: '150px' }} />
            </div>


            <Form layout="inline">
                <Form.Item
                    style={{ marginRight: '0' }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select an option',
                        },
                    ]}
                >
                    <Select placeholder="All" style={{width:'125px'}} onChange={handleSelectChange}>
                        <Option value="All">All</Option>
                        <Option value="Special Notice">Special Notice</Option>
                        <Option value="Updates">Updates</Option>
                        <Option value="Reminder">Reminder</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Input.Search
                        placeholder="input search text"
                        onSearch={handleSearch}
                        enterButton={
                            <Button
                                style={{
                                    backgroundColor: '#001628',
                                    borderColor: '#001628'
                                }}
                            >
                                <SearchOutlined style={{ color: '#ffff' }} />
                            </Button>
                        }
                        style={{
                            position: 'relative',
                            color: '#ffff',
                            borderRadius: '0 5px 5px 0',
                            width:'300px'
                        }}
                    />
                </Form.Item>
            </Form>


        </Flex>

            <div style={{marginTop:'30px'}}>
                {notifications.slice((page-1)*9,(page-1)*9+ 9).map((notification) => (
                    <div>
                        <NotificationRaw
                            key={notification.id}
                            id={notification.id}
                            userName={notification.userName}
                            date={notification.date}
                            subject={notification.subject}
                            description={notification.description}
                            removeNotification={removeNotification}
                        />



                    </div>
                ))}

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Pagination defaultCurrent={1} total={50} onChange={changingPage} pageSize={9}/>
                </div>
            </div>

        </div>
    );


}

export default NotificationCard1;




