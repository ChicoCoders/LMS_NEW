import React from 'react'
import Navigations from '../Component/Navigations'
import { HomeOutlined,MessageOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import profile from '../Profile/Component/profile'



// const PageRoot1 = [
//     {
//         href: '',
//         title: <HomeOutlined />,
//     },
//     {
//         href: '',
//         title: (
//             <>
//                 <MessageOutlined/>
//                 <span>Notifications</span>
//             </>
//         ),
//     },
//     {
//         href: '',
//         title: (
//             <>
//                 <MessageOutlined/>
//                 <span>Search Notifications</span>
//             </>
//         ),
//     },
// ]

function Page() {
    return (
        <div>
            <div>
                <Navigations />
            </div>
            <div>
                <Profile /> {/* Use the profile component here */}
            </div>
        </div>
    );
}

export default Page;
