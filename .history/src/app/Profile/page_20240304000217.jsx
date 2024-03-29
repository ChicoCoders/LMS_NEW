import React from 'react';
import Navigations from '../Component/Navigations';
import profile from '../Profile/Component/profile'; 

function Page() {
    return (
        <div>
            <div>
                <Navigations />
            </div>
            <div>
                <profile /> 
            </div>
        </div>
    );
}

export default Page;
