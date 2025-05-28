import React from 'react';
import { Outlet } from 'react-router';

const Auth = () => {

    return (
        <div className=' bg-white'>
            <Outlet />
        </div>
    );
};

export default Auth;