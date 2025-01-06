import { NavLink, Outlet } from 'react-router-dom';
import {
  FaAd,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const isAdmin = useAdmin();
  return (
    <div className="flex h-screen">
      <div className="w-64 h-full bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              {' '}
              <li>
                <NavLink
                  to="/dashboard/addminhome"
                  className="hover:bg-orange-300"
                >
                  <FaHome />
                  <span> Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/additems"
                  className="hover:bg-orange-300"
                >
                  <FaUtensils />
                  <span> Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageitems"
                  className="hover:bg-orange-300"
                >
                  <FaList />
                  <span> Manage Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/booking"
                  className="hover:bg-orange-300"
                >
                  <FaAd />
                  <span> My Booking</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users" className="hover:bg-orange-300">
                  <FaUsers />
                  <span> add User</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
              <li>
                <NavLink to="/order/contact" className="hover:bg-orange-300">
                  <FaEnvelope />

                  <span>Contact</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
