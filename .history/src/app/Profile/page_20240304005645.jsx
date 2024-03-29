import React from 'react';
import Navigations from '../Component/Navigations';
import Profile from './Component/Profile'; 

function Page() {
    return (
        <div>
            <div>
                <Navigations />
            </div>
            <div style={{
                    maxHeight: "350px",
                    padding: '20px 10px 0 0',
                    overflowY: 'auto',
                }}>
                <Profile />
                </div>
            
        </div>
    );
}

export default Page;
