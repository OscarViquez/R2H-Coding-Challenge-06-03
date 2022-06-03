// Create a function that takes two dates and returns the number of days between the first and second date.

function compareDates(dateOne, dateTwo) {

    // I am changing the Date Parameters To the new Date object
    dateOne = new Date(dateOne);
    dateTwo = new Date(dateTwo);

    // I Convert Dates into Milliseconds
    const dateNumOne = dateOne.getTime();
    const dateNumTwo = dateTwo.getTime();

    // I subtract the Dates, and it will output the milliseconds between the first and second dates
    // But now I need to convert it into days
    let subtractDates = dateNumTwo - dateNumOne;

    // Formula to converting them from: milli > seconds > mins > hours > days
    // convert milliseconds to seconds by dividing it by 1000,
    // convert seconds to minutes by divinding seconds by 60,
    // convert minutes to hours by dividing it by 60,
    // convert hours to day by dividing it by 24
    console.log(subtractDates / 1000 / 60 / 60 / 24)
}
compareDates('June 14, 2019', 'June 20, 2019')
compareDates('December 29, 2018', 'January 1, 2019')
compareDates('July 20, 2019', 'July 30, 2019')
