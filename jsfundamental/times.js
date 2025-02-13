function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = "00"; // Always "00" as per your requirement
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return formattedTime;
}

function getRoundedTime(date) {
    let minutes = date.getMinutes();
    let remainder = minutes % 15;

    if (remainder !== 0) {
        // Round up to the nearest 15-minute interval
        date.setMinutes(minutes + (15 - remainder));
    }
    date.setSeconds(0, 0); // Reset seconds and milliseconds to 0

    return date;
}

function getTimeIntervals(date) {
    let intervals = [];

    let now = new Date();
    let currentTime;

    if (date.toDateString() === now.toDateString()) {
        // If the date is today, start from the rounded current time
        currentTime = getRoundedTime(now);
    } else {
        // If the date is in the future, start from 12:00:00 AM
        currentTime = new Date(date);
        currentTime.setHours(0, 0, 0, 0);
    }

    // Set the end time to 11:45 PM on the given date
    let endTime = new Date(date);
    endTime.setHours(23, 45, 0, 0);

    // Generate 15-minute intervals
    while (currentTime <= endTime) {
        intervals.push(formatTime(currentTime));

        // Add 15 minutes
        currentTime.setMinutes(currentTime.getMinutes() + 15);
    }

    return intervals;
}

// Usage example:
let today = new Date();
let futureDate = new Date('2024-08-20'); // Replace with your future date

let todayIntervals = getTimeIntervals(today);
let futureDateIntervals = getTimeIntervals(futureDate);

console.log("Today's Intervals:", todayIntervals);
console.log("Future Date Intervals:", futureDateIntervals);