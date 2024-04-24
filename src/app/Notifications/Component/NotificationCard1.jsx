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
// Function to handle the search action
const onSearch = (value, _e, info) => console.log(info?.source, value);

// Function to handle the menu item click
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};


// Main component to display notifications
function NotificationCard1() {
    const [notifications, setNotifications] = useState([]);// State to hold notifications
    const[page,changepage]=useState(1);// State to hold the current page number
    const[size,changeSize]=useState(0);// State to hold the total number of notifications

    // Function to change the page number
    // Function to handle page change in pagination
    const changingPage =(pNumber,size)=>{
        changepage(pNumber);
    }

    // Function to fetch notifications data from the API
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

    // UseEffect hook to fetch data when the component mounts
    useEffect(() => { fetchData(); }, []);

    // Function to remove a notification
    const removeNotification = async(id) => {
        try{
            // Call the API to remove the notification
            const response=await axioinstance.delete(`Notification/RemoveNotification?id=${id}`);
            console.log(response);
            // Fetch the updated data
            fetchData();
        }catch(e){
            // Log the error
            console.log(e);
        }
    }

    // Function to handle the selection change
    const handleSelectChange = value => {
        console.log(value); // handle the selection change
    };

    // Function to handle the search action
    const handleSearch = value => {
        console.log(value); // handle the search action
    };

    return (
        <div>
        <Flex gap="small" wrap="wrap" justify="space-between">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '23%' }}>

                <AddNotifications style={{ width: '150px' }}  fetchData={fetchData} />{/*} Add notification component*/}
                <RemindNotification1 style={{ width: '150px' }} /> {/*Remind notification component*/}
                <UpdateNotification1 style={{ width: '150px' }} />  {/*Update notification component*/}
            </div>


            <Form layout="inline"> {/*Form component to display the search and select options*/}
                {/*Form item to display the select option*/}
                <Form.Item
                    style={{ marginRight: '0' }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select an option',
                        },
                    ]}
                >
                     {/*Select component to display the options*/}
                    <Select placeholder="All" style={{width:'125px'}} onChange={handleSelectChange}>{/*make handleSelectChange function to handle the selection change*/}
                        <Option value="All">All</Option>
                        <Option value="Special Notice">Special Notice</Option>
                        <Option value="Updates">Updates</Option>
                        <Option value="Reminder">Reminder</Option>
                    </Select>
                </Form.Item>

                 {/*Form item to display the search input*/}
                <Form.Item>
                    {/*Search component to display the search input*/}
                    <Input.Search
                        placeholder="input search text"
                        onSearch={handleSearch}//make handleSearch function to handle the search action
                        // Add the search icon
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

            {/*Display the notifications*/}
            <div style={{marginTop:'30px'}}>
                {notifications.slice((page-1)*10,(page-1)*10+ 10).map((notification) => (// Display the notifications in a loop
                    <div>
                        <NotificationRaw // NotificationRaw component to display the notification
                            key={notification.id}
                            id={notification.id}
                            userName={notification.userName}
                            date={notification.date}
                            subject={notification.subject}
                            description={notification.description}
                            removeNotification={removeNotification}//make removeNotification function to remove the notification .it do using usestate
                        />



                    </div>
                ))}

                {/*Pagination component to display the pagination*/}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Pagination defaultCurrent={1} total={50} onChange={changingPage} pageSize={10}/>{/*make changingPage function to handle page change in pagination*/}
                </div>
            </div>

        </div>
    );


}

export default NotificationCard1;




