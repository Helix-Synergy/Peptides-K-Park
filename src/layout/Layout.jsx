import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Chatbot from '../components/ui/Chatbot';

const Layout = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ScrollToTopButton />
      <Footer />
      <Chatbot position="left" />
    </div>
  );
};

export default Layout;
