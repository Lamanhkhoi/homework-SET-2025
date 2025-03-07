let hours = 7.2;
const minutesPerHour = 60;
const secondsPerMinute = 60;

let totalMinutes = hours * minutesPerHour;
let totalSeconds = totalMinutes * secondsPerMinute;

let hoursDisplay = Math.floor(hours);
let remainingMinutes = (totalMinutes % minutesPerHour).toFixed(2);
let remainingSeconds = (totalSeconds % secondsPerMinute).toFixed(2);

console.log("Time:" + hoursDisplay + ":" + remainingMinutes + ":" + remainingSeconds);
