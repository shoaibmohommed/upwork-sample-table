import { useLocation, type RouteObject } from 'react-router';
import DashboardLayout from '../layouts/dashboard';
import Bookings from '../pages/bookings';
import { Box, useTheme } from '@mui/material';
import { titleRenderer } from '../utils/helpers';

const Dummy = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        mt: '20px',
        borderRadius: '16px',
        py: '20px',
        px: '10px',
        color: theme.palette.text.primary,
        bgcolor: theme.palette.background.paper,
      }}
    >
      {titleRenderer(pathname)}
    </Box>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Dummy />,
      },
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/users',
        element: <Dummy />,
      },
      {
        path: '/settings',
        element: <Dummy />,
      },
      {
        path: '/logs',
        element: <Dummy />,
      },
      {
        path: '/new',
        element: <Dummy />,
      },
      {
        path: '/finance',
        element: <Dummy />,
      },
      {
        path: '/reports',
        element: <Dummy />,
      },
    ],
  },
];

export default routes;
