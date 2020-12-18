const leapYears = function(year) {
    let isLeapYear = year;
    if( ( (year % 4 == 0) && (year % 100 != 0)) || year % 400 == 0 ){
        return true;
    }
    else {
        return false;
    }
}

module.exports = leapYears
