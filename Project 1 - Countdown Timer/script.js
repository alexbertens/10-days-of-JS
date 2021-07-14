const  monthsEl = document.getElementById('months')
const  daysEl = document.getElementById('days')
const  hoursEl = document.getElementById('hours')
const  minutesEl = document.getElementById('minutes')
const  secondsEl = document.getElementById('seconds')

const newYears = '25 Dec 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const months = Math.floor(totalSeconds / 31 / 3600 / 24);
    const days = Math.floor(totalSeconds / 3600 / 24) %30;
    const hours = Math.floor(totalSeconds / 3600) %24;
    const minutes = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

console.log(months);
// Initial Call
countdown();

setInterval(countdown, 1000);