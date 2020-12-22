// The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years.
// Output how many seconds are in all this.
// All parameters are optional. Consider 30 days in a month
// Example:
// howMuchSec(12, 3); //192
// howMuchSec(1, 33, 22); //81181
// howMuchSec(); //0

function howMuchSec(sec, min, hours, dates, weeks, month, year) {
    if (!sec) {
        return 0;
    }
    min = min || 0;
    sec += min * 60;
    hours = hours || 0;
    sec += hours * 60 * 60;
    dates = dates || 0;
    sec += dates * 24 * 60 * 60;
    weeks = weeks || 0;
    sec += weeks * 7 * 24 * 60 * 60;
    month = month || 0;
    sec += month * 30 * 7 * 24 * 60 * 60;
    year = year || 0;
    sec += year * 365 * 30 * 7 * 24 * 60 * 60;
    return sec;
}
