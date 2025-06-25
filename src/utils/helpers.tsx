import docDetail from '../assets/doc-detail.svg';
import Finance from '../assets/material-symbols_finance-rounded.svg';
import Report from '../assets/mdi_report-line.svg';
import DashboardOutlinedIcon from '../assets/material-symbols_dashboard-outline-rounded.svg';
import PersonOutline from '../assets/mdi_user-outline.svg';
import SettingsOutlined from '../assets/material-symbols_settings-outline-rounded.svg';
import FiberNewOutlined from '../assets/material-symbols_fiber-new-outline.svg';
import BookOutlined from '../assets/material-symbols_book-outline-rounded.svg';
import { ReactSVG } from 'react-svg';

export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
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
    path: '/finance',
    Icon: <ReactSVG src={Finance} style={{ width: 25, height: 25 }} />,
  },
  {
    id: 8,
    title: 'Reports',
    path: '/reports',
    Icon: <ReactSVG src={Report} style={{ width: 25, height: 25 }} />,
  },
];

export const titleRenderer = (pathname: string) =>
  menuItems.map((item) => {
    if (item.path === pathname) return item.title;
  });
