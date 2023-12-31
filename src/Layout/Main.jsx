import React from 'react';
import Navbar from '../sherd/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../sherd/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;