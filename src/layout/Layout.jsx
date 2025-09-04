import React, { useEffect } from 'react'; // Import useEffect
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Chatbot from '../components/ui/Chatbot';

const Layout = () => {
  const location = useLocation(); // Get the current location object

  useEffect(() => {
    // This effect runs whenever the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // The dependency array ensures it only runs on path changes

  return (
    <div className="min-h-screen " style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
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