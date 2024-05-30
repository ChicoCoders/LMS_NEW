import React from 'react'
import SearchResult from './Component/SearchResult'
import Navigations from '../Component/Navigations'
import ContentBox from '../Component/ContentBox'
import { HomeOutlined,InteractionOutlined } from '@ant-design/icons';
import { Space } from 'antd';


const PageRoot = [
  {
        key:'1',
      href: '',
      title: <HomeOutlined />,
  },
  {
    key:'2',
      href: '',
      title: (
          <>
              <InteractionOutlined />
              <span>Requests</span>
          </>
      ),
  },
  {
    key:'3',
      href: '',
      title: (
          
              <span> Search Results</span>
      ),
  },
]

const data = [
    { requestNo: 1, requestId: "ISBN-9780451419439", userId: "00001", userName: "John", date: "2024-02-10", status: "reserved" },
    { requestNo: 2, requestId: "ISBN-9780451419439", userId: "00002", userName: "Kamal", date: "2024-02-10", status: "reserved" },
    { requestNo: 3, requestId: "ISBN-9780451419439", userId: "000013", userName: "Kavidu", date: "2024-02-10", status: "reserved" },
    { requestNo: 4, requestId: "ISBN-9780451419439", userId: "000014", userName: "Sasindu", date: "2024-02-10", status: "reserved" },
    { requestNo: 5, requestId: "ISBN-9780451419439", userId: "000015", userName: "Mala", date: "2024-02-10", status: "reserved" },
    { requestNo: 6, requestId: "ISBN-9780451419439", userId: "000016", userName: "Dilshan", date: "2024-02-10", status: "reserved" },
    { requestNo: 7, requestId: "ISBN-9780451419439", userId: "000018", userName: "sandeepa", date: "2024-02-10", status: "reserved" },
    { requestNo: 8, requestId: "ISBN-9780451419439", userId: "000019", userName: "John", date: "2024-02-10", status: "reserved" },
    { requestNo: 9, requestId: "ISBN-9780451419439", userId: "0000135", userName: "John", date: "2024-02-10", status: "reserved" },
    { requestNo: 10, requestId: "ISBN-9780451419439", userId: "000013", userName: "John", date: "2024-02-10", status: "reserved" },
    { requestNo: 11, requestId: "ISBN-9780451419439", userId: "0000166", userName: "John", date: "2024-02-10", status: "reserved" },
    { requestNo: 12, requestId: "ISBN-9780451419439", userId: "0000188", userName: "John", date: "2024-02-10", status: "reserved" },
    
    // Add more book transitions here
];

function page() {
  return (
   
    <div>
        
            
               <SearchResult />
            
       
    </div>

  )
}

export default page
