import { Box } from '@mui/material';
import Sidebar from '../../components/sidebar';
import { Outlet } from 'react-router';
import Header from '../../components/header';
import { useTheme } from '@mui/material/styles';

const DashboardLayout = () => {
  const theme = useTheme();
  return (
    <Box display="flex" bgcolor={theme.palette.background.default}>
      <Sidebar />
      <Box px={2} pt="25px" display="flex" flexDirection="column" flex={1}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
