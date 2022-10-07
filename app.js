const btn_daily = document.querySelector(".daily");
const btn_week = document.querySelector(".weekly");
const btn_mon = document.querySelector(".monthly");

const current = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous_time");

btn_daily.addEventListener("click", () => {
    fetch("data.json")
    .then(res => res.json())
    .then(res => {
        current.forEach((e,i) => {
            current[i].innerHTML = res[i].timeframes.daily.current + 'hrs';
            previous[i].innerHTML =res[i].timeframes.daily.previous + 'hrs';
        })
    })
});

btn_week.addEventListener("click", () => {
    fetch("data.json")
    .then(res => res.json())
    .then(res => {
        current.forEach((e,i) => {
            current[i].innerHTML = res[i].timeframes.weekly.current + 'hrs';
            previous[i].innerHTML =res[i].timeframes.weekly.previous + 'hrs';
        })
    })
});

btn_mon.addEventListener("click", () => {
    fetch("data.json")
    .then(res => res.json())
    .then(res => {
        current.forEach((e,i) => {
            current[i].innerHTML = res[i].timeframes.monthly.current + 'hrs';
            previous[i].innerHTML =res[i].timeframes.monthly.previous + 'hrs';
        })
    })
});