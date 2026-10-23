import { isWeekend, format, eachDayOfInterval } from 'date-fns';

function workingDaysBetween(startDate, EndDate, holidays=[]) {
    const holidaysSet = new Set(holidays);

    return eachDayOfInterval({
        start : new Date(startDate),
        end : new Date(EndDate)
    }).filter(date => {
        const dateString = format(date,"yyyy-MM-dd");
        return !isWeekend(date) && !holidaysSet.has(dateString);
    }).length;
}

export { workingDaysBetween };