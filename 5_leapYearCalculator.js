const year = 2000;

function isLeapYear(number) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return `${year} is not a leap year.`;
    } else if (year % 4 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year`;
    }


    // if(year % 400 === 0 && year % 100 !== 0) {
    //     return `${year} is not a leap year.`;
    // } else if (year % 4 === 0 || year % 400 === 0) {
    //    return `${year} is a leap year.`;
    //}
}
const result = isLeapYear(year);
console.log(result);