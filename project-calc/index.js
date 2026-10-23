import { differenceInDays } from 'date-fns';
import { workingDaysBetween } from './WorkingDays.js';

const startDate = new Date('2026-01-11');
const endDate = new Date('2026-02-28');

const diff = differenceInDays(endDate, startDate);
console.log(`The difference between two dates is ${diff} days`);

const holidays = [
    '2026-01-01',
    '2026-02-10',
    '2026-02-21'
];

const days = workingDaysBetween('2026-01-11','2026-02-28',holidays);
console.log(`The difference between two dates exclude holidays is ${days} days`);