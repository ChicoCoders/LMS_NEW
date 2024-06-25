'use client'
import React from 'react';
import { Tabs } from 'antd';
import Resours from './Resourses'
import Form1 from './form1';
import Reservation from './Reservation';
import User from './user'
import Resourse from './Resourses';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Resourses',
    children: <Resourse/>,
  },
  {
    key: '2',
    label: 'User',
    children: <User/>,
  },
  {
    key: '3',
    label: 'Reservation',
    children: <Reservation/>,
  },
];
const table = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default table;