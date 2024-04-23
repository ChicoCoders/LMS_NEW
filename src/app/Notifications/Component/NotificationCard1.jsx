import React, { useEffect, useState } from 'react';
import { Button, Flex ,Input, Space,Form,Select} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { AudioOutlined , UserOutlined,DownOutlined} from '@ant-design/icons';
import AddNotifications1 from "./AddNotifications1";
import RemindNotification1 from "./RemindNotification1";
import UpdateNotification1 from "./UpdateNotification1";
import Notifications from "./Notifications";
import NotificationRaw from "./NotificationRaw";
import axioinstance from '../../Instance/api_instance';

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

    const changingPage =(pnumber,size)=>{
        changepage(pnumber);
    }

    // Fetching data from the API
    async function fetchData() {
        try {
            // Sending POST request to fetch data based on search parameters
            const response = await axioinstance.get('Notification/GetNotificatons?username=all');
            const data = response.data.reverse();
            changeSize(data.length);
            setNotifications(data);
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

                <AddNotifications1 style={{ width: '150px' }} />
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
                {notifications.map((notification) => (
                    <div>
                        <NotificationRaw
                            key={notification.id}
                            id={notification.id}
                            to={notification.to}
                            date={notification.date}
                            type={notification.type}
                            description={notification.description}
                            removeNotification={removeNotification}
                        />



                    </div>
                ))}
            </div>

        </div>
            );


}
export default NotificationCard1;




