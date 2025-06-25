import { Chip, IconButton, Tooltip, Typography, Box } from '@mui/material';
import type { BookingData } from '../types';
import CircleIcon from '@mui/icons-material/Circle';
import EditOutlined from '@mui/icons-material/EditOutlined';

const getStatusChipColor = (status: BookingData['tripStatus']): string => {
  switch (status) {
    case 'Travelled': {
      return '#B7EEBC';
    }
    case 'Confirmed':
      return '#778BE8';
    case 'Cancelled':
      return '#FF6B6C';
    case 'On Tour':
      return '#FFE17C';
    default:
      return 'success';
  }
};

const leadPaxBoxTooltip = (row: BookingData) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        cursor: 'pointer',
        maxWidth: '200px',
      }}
    >
      <Typography fontSize="10px" variant="body2">
        {row.leadPax.name}
      </Typography>
      <Typography fontSize="10px" variant="caption" color="text.secondary">
        {row.leadPax.details}
      </Typography>
    </Box>
  );
};
export const LeadPaxRenderer = (row: BookingData) => {
  return (
    <Tooltip
      PopperProps={{
        modifiers: [
          {
            name: 'preventOverflow',
            options: { boundary: 'viewport' },
          },
        ],
      }}
      title={leadPaxBoxTooltip(row)}
    >
      <Box
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
        }}
      >
        <Typography fontSize="10px" variant="body2">
          {row.leadPax.name}
        </Typography>
        <Typography fontSize="10px" variant="caption" color="text.secondary">
          {row.leadPax.details}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export const TripStatusRenderer = (row: BookingData) => {
  return (
    <Chip
      label={row.tripStatus}
      sx={{
        color: '#171717',
        backgroundColor: getStatusChipColor(row.tripStatus),
        fontSize: '10px',
      }}
      size="small"
    />
  );
};

export const BookingStatusRenderer = (row: BookingData) => {
  return (
    <CircleIcon
      sx={{
        color: row.bookingStatus === 'green' ? 'green' : 'blue',
        fontSize: 16,
      }}
    />
  );
};
export const ActionRenderer = (_: BookingData) => {
  return (
    <IconButton
      size="small"
      sx={(theme) => ({
        width: 35,
        height: 35,
        color: theme.palette.custom.iconColor,
        borderRadius: '8px',
        bgcolor: theme.palette.custom.iconBG,
        '&:hover': { bgcolor: theme.palette.custom.iconBGHover },
      })}
    >
      <EditOutlined fontSize="small" />
    </IconButton>
  );
};
