import { createBrowserRouter } from 'react-router-dom';
import MainLaout from '../layout/MainLaout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/OurShop/Order';
import Login from '../pages/Authentication/Login';
import SignUp from '../pages/Authentication/SignUp';
import PriviteRoute from '../PrivateRoute/PriviteRoute';
import Secret from '../Secret/Secret';

import Cart from '../layout/DeshBoard/Cart';
import Dashboard from '../layout/DeshBoard/Deshboard';
import AllUsers from '../layout/DeshBoard/AllUsers';
import AddItems from '../layout/DeshBoard/AddItems';
import AdminRouter from './AdminRouter';
import ManageItems from '../layout/DeshBoard/ManageItems';
import UpdateItem from '../layout/DeshBoard/UpdateItem';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLaout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Order />,
      },
      {
        path: '/order/:category',
        element: <Order />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <SignUp />,
      },
      {
        path: '/secret',
        element: (
          <PriviteRoute>
            <Secret></Secret>
          </PriviteRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PriviteRoute>
        {' '}
        <Dashboard />
      </PriviteRoute>
    ),
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart />,
      },
      {
        path: '/dashboard/additems',
        element: (
          <AdminRouter>
            <AddItems />
          </AdminRouter>
        ),
      },
      {
        path: '/dashboard/updateItem/:id',
        element: (
          <AdminRouter>
            <UpdateItem />
          </AdminRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`), // Correct URL and fetch function
      },

      {
        path: '/dashboard/manageitems',
        element: (
          <AdminRouter>
            <ManageItems />
          </AdminRouter>
        ),
      },
      {
        path: '/dashboard/users',
        element: (
          <AdminRouter>
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
    ],
  },
]);

export default router;
