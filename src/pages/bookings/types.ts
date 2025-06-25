export interface BookingData {
  id: string;
  tripId: string;
  arrival: string;
  departure: string;
  travelMonth: string;
  destination: string;
  accManager: string;
  bookingDate: string;
  agent: string;
  leadPax: {
    name: string;
    details: string;
  };
  orderValue: string;
  paymentValue: string;
  transferPrice: string;
  tripStatus: 'Travelled' | 'Confirmed' | 'Cancelled' | 'On Tour';
  opsSpoc: string;
  bookingStatus: 'green' | 'blue';
  vouchers: string;
}

export interface Column {
  accessorKey: string;
  header: string;
  renderer?: (row: BookingData) => React.ReactNode;
}
