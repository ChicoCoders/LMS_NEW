import React from 'react';
import Navigations from '../Component/Navigations';
import Profile from '../Profile/Component/profile'; // import the profile component

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
