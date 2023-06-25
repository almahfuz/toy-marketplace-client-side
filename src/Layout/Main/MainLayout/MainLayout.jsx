import React from 'react';
import Menubar from '../../../pages/Menubar/Menubar';
import { Outlet } from 'react-router-dom';
import Footer from '../../../assets/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;