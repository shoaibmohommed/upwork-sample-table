import type { Column } from '../types';
import {
  ActionRenderer,
  BookingStatusRenderer,
  LeadPaxRenderer,
  TripStatusRenderer,
} from './renderers';

export const columns = [
  {
    accessorKey: 'tripId',
    header: 'Trip ID',
  },
  {
    accessorKey: 'arrival',
    header: 'Arrival',
    width: '100px',
  },
  {
    accessorKey: 'departure',
    header: 'Departure',
  },
  {
    accessorKey: 'travelMonth',
    header: 'Travel Month',
  },
  {
    accessorKey: 'destination',
    header: 'Destination',
  },
  {
    accessorKey: 'accManager',
    header: 'Acc. Manager',
  },
  {
    accessorKey: 'bookingDate',
    header: 'Booking Date',
    width: '100px',
  },
  {
    accessorKey: 'agent',
    header: 'Agent',
  },
  {
    accessorKey: 'leadPax',
    header: 'Lead Pax',
    renderer: LeadPaxRenderer,
  },
  {
    accessorKey: 'orderValue',
    header: 'Order Value (USD)',
  },
  {
    accessorKey: 'paymentValue',
    header: 'Payment Value (USD)',
  },
  {
    accessorKey: 'transferPrice',
    header: 'Transfer Price',
  },
  {
    accessorKey: 'tripStatus',
    header: 'Trip Status',
    renderer: TripStatusRenderer,
  },
  {
    accessorKey: 'opsSpoc',
    header: 'Ops Spoc',
  },
  {
    accessorKey: 'bookingStatus',
    header: 'Booking Status',
    renderer: BookingStatusRenderer,
  },
  {
    accessorKey: 'vouchers',
    header: 'Vouchers',
  },
  {
    accessorKey: 'action',
    header: 'Action',
    renderer: ActionRenderer,
  },
];

export const columnsMappings = columns.reduce((acc, column) => {
  acc[column.accessorKey] = column;
  return acc;
}, {} as Record<string, Column>);
