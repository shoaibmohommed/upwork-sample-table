import { Box, Button, Typography, IconButton } from '@mui/material';
import { Download, Sun, Moon, Tickets } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import { useAppTheme } from '../../contexts/Theme/hook';

const Header = () => {
  const theme = useTheme();
  const colorMode = useAppTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap={2} height={36}>
        <Box
          width={40}
          height={40}
          display="flex"
          borderRadius="8px"
          alignItems="center"
          justifyContent="center"
          bgcolor={theme.palette.background.paper}
        >
          <Tickets size={30} color="#555555" />
        </Box>
        <Typography variant="h5" mt={1}>
          All Bookings
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>
        <Button
          variant="outlined"
          sx={{
            width: 40,
            height: 40,
            padding: 0,
            minWidth: 40,
            color: '#DADADA',
          }}
        >
          <Download />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
