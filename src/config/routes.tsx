import type { RouteObject } from 'react-router';
import DashboardLayout from '../layouts/dashboard';
import Bookings from '../pages/bookings';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/users',
        element: <Bookings />,
      },
    ],
  },
];

export default routes;
