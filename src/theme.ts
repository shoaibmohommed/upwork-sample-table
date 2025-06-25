import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      iconColor: string;
      sideBarIcon: {
        active: string;
        inactive: string;
      };
      iconBG: string;
      iconBGHover: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      iconColor: string;
      sideBarIcon: {
        active: string;
        inactive: string;
      };
      iconBG: string;
      iconBGHover: string;
    };
  }
}

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    cssVariables: true,
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1976d2' },
            background: {
              default: '#f4f6fa',
              paper: '#fff',
            },
            text: {
              primary: '#181818',
              secondary: '#555',
            },
            custom: {
              iconColor: '#343434',
              iconBG: '#C6C6F9',
              iconBGHover: '#C6C6F980',
              sideBarIcon: {
                active: '#181818',
                inactive: '#18181870',
              },
            },
          }
        : {
            primary: { main: '#90caf9' },
            background: {
              default: '#232323',
              paper: '#181818',
            },
            text: {
              primary: '#DADADA',
              secondary: '#aaa',
            },
            custom: {
              iconColor: '#343434',
              iconBG: '#C6C6F9',
              iconBGHover: '#C6C6F980',
              sideBarIcon: {
                active: '#DDDDDD',
                inactive: '#555555',
              },
            },
          }),
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            border: 'none',
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            margin: '4px 8px',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          InputProps: {
            sx: {
              '& .MuiOutlinedInput-root': {
                borderRadius: 100,
              },
            },
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            // borderL
          },

          page: {
            borderRadius: 3.12,
            border: '1px solid #7FA6AE',
            '&.Mui-selected': {
              backgroundColor: '#7FA6AE',
              '&:hover': {
                backgroundColor: '#7FA6AE',
              },
            },
          },
        },
      },
    },
  });
