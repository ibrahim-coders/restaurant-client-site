import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Navbar from '../pages/Shared/Navbar';

const MainLayout = () => {
  const location = useLocation();
  // Corrected condition: check if path contains 'login' or 'register'
  const noHeaderFooter =
    location.pathname.includes('login') ||
    location.pathname.includes('register');

  return (
    <div>
      {/* Conditionally render Navbar and Footer */}
      {!noHeaderFooter && <Navbar />}
      <Outlet />
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
