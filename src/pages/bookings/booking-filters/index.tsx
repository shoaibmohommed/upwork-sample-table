import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  useTheme,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { type ChangeEvent } from 'react';
import type { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setSort, setFilter, type Filters } from '../dataSlice';

const BookingFilters = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.bookings.filters);
  const sortBy = useSelector((state: RootState) => state.bookings.sortBy);

  const handleSelectChange =
    (field: keyof Filters) => (event: SelectChangeEvent<string>) => {
      dispatch(setFilter({ field, value: event.target.value }));
    };

  const handleInputChange =
    (field: keyof Filters) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(setFilter({ field, value: event.target.value }));
    };

  const commonSelectProps = {
    displayEmpty: true,
    sx: {
      height: 40,
      minWidth: 150,
      color: 'text.secondary',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor:
          theme.palette.mode === 'dark' ? '#343434' : theme.palette.divider,
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
  };

  return (
    <Box display="flex" alignItems="center" gap={2} my={3} width="100%">
      <TextField
        placeholder="Lead pax/Trip Id"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={filters['leadPax,tripId']}
        onChange={handleInputChange('leadPax,tripId')}
        sx={{
          ...commonSelectProps.sx,
          flex: 1,
          '& .MuiOutlinedInput-root': { borderRadius: 100 },
        }}
      />
      <Select
        value={filters.destination || ''}
        onChange={handleSelectChange('destination')}
        {...commonSelectProps}
        sx={{ ...commonSelectProps.sx, flex: 1 }}
      >
        <MenuItem value="" disabled>
          Destination
        </MenuItem>
        <MenuItem value="singapore">Singapore</MenuItem>
        <MenuItem value="thailand">Thailand</MenuItem>
      </Select>
      <Select
        value={filters.travelMonth || ''}
        onChange={handleSelectChange('travelMonth')}
        {...commonSelectProps}
        sx={{ ...commonSelectProps.sx, flex: 1 }}
      >
        <MenuItem value="" disabled>
          Travel Month
        </MenuItem>
        <MenuItem value="jun">June</MenuItem>
        <MenuItem value="jul">July</MenuItem>
      </Select>
      <Select
        value={sortBy || ''}
        onChange={(e) => dispatch(setSort(e.target.value))}
        {...commonSelectProps}
        sx={{ ...commonSelectProps.sx, flex: 1 }}
      >
        <MenuItem value="" disabled>
          Sort by
        </MenuItem>
        <MenuItem value="bookingDate">Booking Date</MenuItem>
        <MenuItem value="orderValue">Order Value</MenuItem>
      </Select>
      <TextField
        placeholder="Acc. Manager"
        variant="outlined"
        size="small"
        value={filters.accManager || ''}
        onChange={handleInputChange('accManager')}
        sx={{
          ...commonSelectProps.sx,
          flex: 1,
          '& .MuiOutlinedInput-root': { borderRadius: 100 },
        }}
      />
      <TextField
        placeholder="Agent"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={filters.agent || ''}
        onChange={handleInputChange('agent')}
        sx={{
          ...commonSelectProps.sx,
          flex: 1,
          '& .MuiOutlinedInput-root': { borderRadius: 100 },
        }}
      />
      <Select
        value={filters.tripStatus || ''}
        onChange={handleSelectChange('tripStatus')}
        {...commonSelectProps}
        sx={{ ...commonSelectProps.sx, flex: 1 }}
      >
        <MenuItem value="" disabled>
          Trip status
        </MenuItem>
        <MenuItem value="travelled">Travelled</MenuItem>
        <MenuItem value="confirmed">Confirmed</MenuItem>
      </Select>
      <Box flex={0} ml="auto">
        <Button
          variant="contained"
          onClick={() => dispatch(applyFilters())}
          sx={{
            bgcolor: theme.palette.custom.iconBG,
            '&:hover': { bgcolor: theme.palette.custom.iconBGHover },
            width: 130,
            height: 40,
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default BookingFilters;
