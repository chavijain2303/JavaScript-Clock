function padWithZero(num) {
    return num < 10 ? '0' + num : num;
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = padWithZero(minutes);
    seconds = padWithZero(seconds);
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}

let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = formatAMPM(a);
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}, 1000);

function updateCountryTimes() {
    const countryTimes = {
        "New York": new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
        "London": new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }),
        "Tokyo": new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
        "Sydney": new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })
    };

    let timesList = '';
    for (const [city, time] of Object.entries(countryTimes)) {
        timesList += `<li>${city}: ${time}</li>`;
    }
    document.getElementById('countryTimes').innerHTML = timesList;
}

setInterval(updateCountryTimes, 1000);
