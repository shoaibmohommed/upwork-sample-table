import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Typography,
} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import logo from '../../assets/icon.svg';
import { useTheme } from '@mui/material/styles';
import docDetail from '../../assets/doc-detail.svg';
import Finance from '../../assets/material-symbols_finance-rounded.svg';
import Report from '../../assets/mdi_report-line.svg';
import DashboardOutlinedIcon from '../../assets/material-symbols_dashboard-outline-rounded.svg';
import PersonOutline from '../../assets/mdi_user-outline.svg';
import SettingsOutlined from '../../assets/material-symbols_settings-outline-rounded.svg';
import FiberNewOutlined from '../../assets/material-symbols_fiber-new-outline.svg';
import BookOutlined from '../../assets/material-symbols_book-outline-rounded.svg';
import { ReactSVG } from 'react-svg';
import { Link, useLocation } from 'react-router';
import { getActiveLinkClass } from '../../utils/helpers';

const expandedWidth = 200;
const collapsedWidth = 65;
const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    Icon: (
      <ReactSVG src={DashboardOutlinedIcon} style={{ width: 25, height: 25 }} />
    ),
  },
  {
    id: 2,
    title: 'Users',
    path: '/users',
    Icon: <ReactSVG src={PersonOutline} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 3,
    title: 'Settings',
    path: '/settings',
    Icon: <ReactSVG src={SettingsOutlined} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 4,
    title: 'Logs',
    path: '/logs',
    Icon: <ReactSVG src={docDetail} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 5,
    title: 'New',
    path: '/new',
    Icon: <ReactSVG src={FiberNewOutlined} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 6,
    title: 'Bookings',
    path: '/bookings',
    Icon: <ReactSVG src={BookOutlined} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 7,
    title: 'Expense',
    path: '/expense',
    Icon: <ReactSVG src={Finance} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 8,
    title: 'Stocks',
    path: '/stocks',
    Icon: <ReactSVG src={Report} style={{ width: 25, height: 25 }} />,
  },
];

const MenuList = ({ open }: { open: boolean }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [showText, setShowText] = React.useState(open);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (open) {
      timeout = setTimeout(() => setShowText(true), 300); // match transition duration
    } else {
      setShowText(false);
    }
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: open ? 'flex-start' : 'center',
        width: '100%',
        p: 0,
        gap: 2,
      }}
    >
      {menuItems.map((item) => (
        <Link to={item.path} key={item.id}>
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              justifyContent: 'center',
              '& svg': {
                path: {
                  fill:
                    pathname === item.path
                      ? theme.palette.custom.sideBarIcon.active
                      : theme.palette.custom.sideBarIcon.inactive,
                },
              },
              '&:hover': {
                '& svg': {
                  path: {
                    fill: theme.palette.custom.sideBarIcon.active,
                  },
                },
              },
            }}
          >
            {item.Icon}
            {showText && <Typography variant="body2">{item.title}</Typography>}
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};
const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        bgcolor: theme.palette.background.paper,
      }}
      slotProps={{
        paper: {
          sx: {
            width: open ? expandedWidth : collapsedWidth,
            transition: 'width 0.3s',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflowY: 'unset',
          },
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        position="relative"
        gap={2}
        pt="24px"
      >
        <IconButton
          onClick={handleToggle}
          size="medium"
          sx={{
            position: 'absolute',
            top: 24,
            right: -12,
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            ':hover': {
              bgcolor: theme.palette.action.hover,
            },
            boxShadow: 1,
            transition: 'transform 0.2s',
            padding: '1.5px',
          }}
        >
          {open ? (
            <KeyboardDoubleArrowLeftIcon fontSize="inherit" />
          ) : (
            <KeyboardDoubleArrowRightIcon fontSize="inherit" />
          )}
        </IconButton>
        <img src={logo} alt="logo" width={27} />
        <MenuList open={open} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
