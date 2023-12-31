document.addEventListener("DOMContentLoaded", () => {
    setInterval(clock, 1000);
});

const decimalToBinary = (number, length) => {
    return number.toString(2).padStart(length, "0");
};

const getBinaryTime = (hours, minutes, seconds) => {
    return [hours, minutes, seconds].map((unit) => decimalToBinary(unit, 6));
};

const clock = () => {
    const elClock = document.getElementById("clock");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hms = getBinaryTime(hours, minutes, seconds);

    elClock.innerHTML = hms.map((binary) => `<h2>${binary}</h2>`).join("");
};
