import {
  Box,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  useTheme,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingFilters from './booking-filters';
import { columns, columnsMappings } from './table-items/columns';
import { mockData } from './table-items/data';
import type { BookingData } from './types';
import { Pagination } from './table-items/pagination';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setData, setPage } from './dataSlice';
import { useEffect } from 'react';

const renderCells = (row: BookingData, rowId: string) => {
  const cells = [] as React.ReactNode[];
  Object.keys(row).forEach((key, index) => {
    const column = columnsMappings[key];
    if (column) {
      if (column.renderer) {
        cells.push(
          <TableCell
            key={`${rowId}-${key}-${index}`}
            sx={{ fontSize: '10px', height: 70 }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              {column.renderer(row)}
            </Box>
          </TableCell>
        );
      } else {
        const value = row[column.accessorKey as keyof BookingData];
        cells.push(
          <TableCell
            key={`${rowId}-${key}-${index}`}
            sx={{ fontSize: '10px', height: 70 }}
          >
            {value as string}
          </TableCell>
        );
      }
    }
  });
  return cells;
};

const Bookings = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.bookings.data);
  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch]);
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
      <BookingFilters />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer
          component={Paper}
          sx={{
            bgcolor: 'transparent',
            boxShadow: 'none',
            maxHeight: '500px',
            overflow: 'auto',
          }}
        >
          <Table
            stickyHeader
            sx={{
              tableLayout: 'fixed',
              minWidth: 650,
              '& .MuiTableCell-head': {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#272729' : '#fafafa',
              },
              '& .MuiTableCell-body': {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#171717' : '#fff',
              },
              '& .MuiTableCell-root': {
                border: `1px solid ${
                  theme.palette.mode === 'dark'
                    ? '#343434'
                    : theme.palette.divider
                }`,
              },
            }}
            size="small"
            aria-label="bookings table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ fontSize: '12px', minWidth: column.width || 'auto' }}
                    key={column.accessorKey}
                  >
                    {column.header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: BookingData) => (
                <TableRow key={row.id}>{...renderCells(row, row.id)}</TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination />
      </Paper>
    </Box>
  );
};

export default Bookings;
