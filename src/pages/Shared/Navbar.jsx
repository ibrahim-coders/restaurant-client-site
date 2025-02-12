import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { GiShoppingCart } from 'react-icons/gi';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
  const [cart] = useCart();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
        toast.success('Logged out successfully!');
      })
      .catch(error => {
        console.log(error);
        toast.error('Logout failed! Please try again.');
      });
  };

  return (
    <div className="fixed z-10 w-full bg-black bg-opacity-30 text-white">
      <header className="relative z-20 w-full border-b shadow-lg shadow-slate-700/5 lg:backdrop-blur-sm">
        <div className=" mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-center justify-between"
            role="navigation"
          >
            {/* Brand */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-100">BISTRO BOSS</h2>
              <span className="text-sm text-gray-300">Restaurant</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`relative block h-10 w-10 lg:hidden ${
                isToggleOpen ? 'open' : ''
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen}
              aria-label="Toggle navigation"
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    isToggleOpen ? 'translate-y-1 rotate-45' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white ${
                    isToggleOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    isToggleOpen ? '-translate-y-1 -rotate-45' : ''
                  }`}
                ></span>
              </div>
            </button>

            {/* Nav Links */}
            <ul
              className={`absolute top-full left-0 z-20 w-full bg-black bg-opacity-30 text-white lg:static lg:flex lg:w-auto lg:bg-transparent lg:text-white lg:items-center ${
                isToggleOpen ? 'visible opacity-100' : 'invisible opacity-0'
              } lg:opacity-100 lg:visible transition-all duration-300`}
            >
              {[
                { to: '/', label: 'Home' },
                { to: '/contact', label: 'Contact Us' },
                user && isAdmin
                  ? { to: '/dashboard', label: 'Dashboard' }
                  : null,
                { to: '/menu', label: 'Our Menu' },
                { to: '/order/salad', label: 'Our Shop' },
              ]
                .filter(link => link !== null)
                .map((link, index) => (
                  <li key={index} className="px-4 py-2">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-yellow-600 font-bold'
                          : 'hover:text-yellow-500'
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}

              {/* Cart Icon */}
              <NavLink to="/dashboard" className="mr-6">
                <button className="btn">
                  <GiShoppingCart className="mt-4" />
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
              </NavLink>

              {/* User Login/Logout */}
              {user ? (
                <Link
                  onClick={handleLogOut}
                  className="btn bg-orange-700 text-white"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn bg-sky-700 text-white">
                  Login
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
