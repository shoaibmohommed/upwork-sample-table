import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BookingData } from './types';
import { mockData } from './table-items/data';

export interface Filters {
  destination: string;
  travelMonth: string;
  tripStatus: string;
  agent: string;
  accManager: string;
  'leadPax,tripId': string;
}
export interface BookingsState {
  dataStore: BookingData[];
  dataCount: number;
  data: BookingData[];
  page: number;
  startRecord: number;
  sortBy: string;
  endRecord: number;
  filters: Filters;
}

export const ROWS_PER_PAGE = 15;
const initialState: BookingsState = {
  dataStore: mockData,
  dataCount: mockData.length,
  data: [],
  page: 0,
  startRecord: 0,
  endRecord: 0,
  sortBy: '',
  filters: {
    destination: '',
    travelMonth: '',
    tripStatus: '',
    agent: '',
    accManager: '',
    'leadPax,tripId': '',
  },
};

const filterData = (items: BookingData[], filters: Filters) => {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      // skip empty filter values
      if (!filters[key as keyof Filters]) return true;
      const filterValue = String(filters[key as keyof Filters]).toLowerCase();

      // if the key is a combination of two keys, split them and check if the item contains the filter value
      if (key === 'leadPax,tripId') {
        const comparisonLeadPaxName = item.leadPax.name
          .toLowerCase()
          .includes(filterValue);
        const comparisonLeadPaxDetails = item.leadPax.details
          .toLowerCase()
          .includes(filterValue);
        const comparisonTripId = item.tripId
          .toLowerCase()
          .includes(filterValue);
        return (
          comparisonLeadPaxName || comparisonLeadPaxDetails || comparisonTripId
        );
      }

      return String(item[key as keyof BookingData])
        .toLowerCase()
        .includes(filterValue);
    });
  });
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<BookingData[]>) {
      state.data = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      const start = (state.page - 1) * ROWS_PER_PAGE + 1;
      const end = Math.min(start + (ROWS_PER_PAGE - 1), state.dataCount);
      state.data = state.dataStore.slice(start - 1, end);
      state.startRecord = start;
      state.endRecord = end;
    },
    setRange(state, action: PayloadAction<{ start: number; end: number }>) {
      state.startRecord = action.payload.start;
      state.endRecord = action.payload.end;
    },
    setFilter(
      state,
      action: PayloadAction<{ field: keyof Filters; value: string }>
    ) {
      state.filters[action.payload.field] = action.payload.value;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    applyFilters(state) {
      state.data = filterData(state.dataStore, state.filters);
      if (state.sortBy) {
        if (state.sortBy === 'orderValue') {
          state.data = state.data.sort((a: BookingData, b: BookingData) => {
            return Number(b.orderValue) - Number(a.orderValue);
          });
        } else if (state.sortBy === 'bookingDate') {
          state.data = state.data.sort((a: BookingData, b: BookingData) => {
            return (
              new Date(b.bookingDate).getTime() -
              new Date(a.bookingDate).getTime()
            );
          });
        }
      }
      //   state.dataStore.filter((row) => {
      //     let toReturn = false;
      //     if (state.filters.destination) {
      //       toReturn =
      //         row.destination.toLowerCase() ===
      //         state.filters.destination.toLowerCase();
      //     }
      //     if (state.filters.travelMonth) {
      //       toReturn =
      //         row.travelMonth.toLowerCase() ===
      //         state.filters.travelMonth.toLowerCase();
      //     }
      //     // if (state.sortBy) {
      //     //   return row.sortBy === state.sortBy;
      //     // }
      //     if (state.filters.tripStatus) {
      //       toReturn =
      //         row.tripStatus.toLowerCase() ===
      //         state.filters.tripStatus.toLowerCase();
      //     }
      //     if (state.filters.agent) {
      //       toReturn =
      //         row.agent.toLowerCase() === state.filters.agent.toLowerCase();
      //     }
      //     if (state.filters.accManager) {
      //       toReturn =
      //         row.accManager.toLowerCase() ===
      //         state.filters.accManager.toLowerCase();
      //     }
      //     if (state.filters.leadPax) {
      //       const leadPax = state.filters.leadPax.toLowerCase();
      //       toReturn =
      //         row.leadPax.name.toLowerCase().includes(leadPax) ||
      //         row.leadPax.details.toLowerCase().includes(leadPax) ||
      //         row.tripId.toLowerCase().includes(leadPax);
      //     }
      //     return toReturn;
      //   });
    },
  },
});

export const { setData, setPage, setRange, setFilter, applyFilters, setSort } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
