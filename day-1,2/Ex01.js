let date = new Date();

let weekdayNum = date.getDay()
let weekdays = ['', 'Monday', "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday", "Sunday"]
let currentTime = date.getHours()
let currentMin = date.getMinutes()
let currentSec = date.getSeconds()

function print_array_element(arr, i) {
    console.log(`Today is : ` + arr[i]);
}

print_array_element(weekdays, weekdayNum);
console.log(`current time is : ` + currentTime + `PM` + ` :` + currentMin + ` :` + currentSec);