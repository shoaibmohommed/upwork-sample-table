import { faker } from '@faker-js/faker';
import { type BookingData } from '../types';

const generateMockTrips = (count = 50): BookingData[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    tripId: `AB_${1001 + index}`,
    arrival: faker.date.soon().toISOString().split('T')[0].toString(),
    departure: faker.date.future().toISOString().split('T')[0].toString(),
    travelMonth: faker.date.month().toString(),
    destination: faker.location.city(),
    accManager: faker.person.fullName(),
    bookingDate: faker.date
      .recent({
        days: 30,
      })
      .toISOString()
      .split('T')[0]
      .toString(),
    agent: faker.company.name(),
    leadPax: {
      name: faker.person.fullName(),
      details: `Email: ${faker.internet.email()} | Phone: ${faker.phone.number()}`,
    },
    orderValue: faker.commerce.price({ min: 1000, max: 10000 }),
    paymentValue: faker.commerce.price({ min: 500, max: 5000 }),
    transferPrice: `IDR ${new Intl.NumberFormat('id-ID').format(
      faker.number.int({ min: 50000, max: 200000000 })
    )}`,
    tripStatus: faker.helpers.arrayElement([
      'Travelled',
      'Confirmed',
      'Cancelled',
      'On Tour',
    ]),
    opsSpoc: faker.person.fullName(),
    bookingStatus: faker.helpers.arrayElement(['green', 'blue']),
    vouchers: faker.helpers.arrayElement(['Issued', 'Pending', 'None']),
    action: 'Edit',
  }));
};

export const mockData = generateMockTrips(100); // 100 trips
