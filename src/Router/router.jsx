import { createBrowserRouter } from 'react-router-dom';
import MainLaout from '../layout/MainLaout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/OurShop/Order';
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
        element: <Menu />,
      },
      {
        path: '/order/:category',
        element: <Order />,
      },
    ],
  },
]);

export default router;
