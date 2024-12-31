import { Outlet } from 'react-router-dom';

import Footer from '../pages/Footer/Footer';
import Navbar from '../pages/Shared/Navbar';

const MainLaout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLaout;
