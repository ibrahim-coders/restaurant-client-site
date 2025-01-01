import { createBrowserRouter } from 'react-router-dom';
import MainLaout from '../layout/MainLaout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/OurShop/Order';
import Login from '../pages/Authentication/Login';
import SignUp from '../pages/Authentication/SignUp';
import PriviteRoute from '../PrivateRoute/PriviteRoute';
import Secret from '../Secret/Secret';
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
]);

export default router;
