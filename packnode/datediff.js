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

module.exports = daysOfWork;
//Multi module.exports = {daysOfWork, Otherfunct};