const { differenceInBusinessDays } = require('date-fns');

function daysOfWork(start, end, holidays) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    let workDays = differenceInBusinessDays(endDate,startDate);
    holidaysFilter = holidays.filter((dd)=> {
        const datex = new Date(dd);
        const dayOfWeek = datex.getDay();
        return dayOfWeek !=0 && dayOfWeek !=6
    });
    workDays = workDays - holidaysFilter.length;
    return workDays;
}

holidays = [
    '2026-02-16',
    '2026-02-17',
    '2026-03-20',
    '2026-03-21',
    '2026-03-22',
    '2026-03-23',
    '2026-03-24',
    '2026-04-03',
    '2026-04-05',
    '2026-05-01',
    '2026-05-14',
    '2026-05-15',
    '2026-05-27',
    '2026-05-28',
    '2026-05-31',
    '2026-06-01',
    '2026-06-16',
];
console.log(daysOfWork('2026-02-03', '2026-06-11',holidays));