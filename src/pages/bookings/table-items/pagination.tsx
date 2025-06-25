import {
  Pagination as MuiPagination,
  Box,
  Typography,
  PaginationItem,
} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { ROWS_PER_PAGE, setPage } from '../dataSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const tableState = useSelector((state: RootState) => state.bookings);
  const startRecord = useSelector(
    (state: RootState) => state.bookings.startRecord
  );
  const endRecord = useSelector((state: RootState) => state.bookings.endRecord);

  const handleChangePage = (_: ChangeEvent<unknown>, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const count = Math.ceil(tableState.dataCount / ROWS_PER_PAGE);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        py: 1,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {`${startRecord}-${endRecord} out of ${tableState.dataCount} results`}
      </Typography>

      <MuiPagination
        showFirstButton
        showLastButton
        shape="rounded"
        sx={{
          color: '#7FA6AE',
        }}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              first: KeyboardDoubleArrowLeftIcon,
              last: KeyboardDoubleArrowRightIcon,
            }}
            {...item}
          />
        )}
        count={count}
        page={tableState.page}
        onChange={handleChangePage}
      />
    </Box>
  );
};
