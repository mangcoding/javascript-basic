const { differenceInBusinessDays } = require("date-fns");

function workDaysDiffExcludeHolidays(start, end, holidays) {
    const workDaysDiff = differenceInBusinessDays(new Date(end), new Date(start))
    const holidayFilter = holidays.filter((tanggal) => {
        const numOfDay = new Date(tanggal).getDay();
        return numOfDay !=0 && numOfDay !=6;
    });

    return workDaysDiff - holidayFilter.length;
}

module.exports = { workDaysDiffExcludeHolidays }; 
//single function module.exports = workDaysDiffExcludeHolidays
