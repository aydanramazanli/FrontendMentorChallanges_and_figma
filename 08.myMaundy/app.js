const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const today = document.querySelector(".today");
const countdown = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-item h3");


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
console.log(tempDay)


const futureDate = new Date(tempYear, tempMonth, tempDay + 16);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();

month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
today.textContent = `Today ${weekday}, ${tempDay} ${month} ${tempYear} `;

const futureTime = futureDate.getTime();

function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
}
// countdown;
let count = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();