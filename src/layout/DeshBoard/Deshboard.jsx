import { NavLink, Outlet } from 'react-router-dom';
import {
  FaAd,
  FaBookmark,
  FaCalculator,
  FaHome,
  FaSearch,
  FaShoppingCart,
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-full bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/home" className="hover:bg-orange-300">
              <FaHome />
              <span> Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/resevation" className="hover:bg-orange-300">
              <FaCalculator />
              <span> Resevation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="hover:bg-orange-300">
              <FaShoppingCart />
              <span> My Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="hover:bg-orange-300">
              <FaAd />
              <span> Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking" className="hover:bg-orange-300">
              <FaBookmark />
              <span> My Booking</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="hover:bg-orange-300">
              <FaHome />
              <span> Main Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="hover:bg-orange-300">
              <FaSearch />
              <span> Menu</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
