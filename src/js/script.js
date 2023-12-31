$(document).ready(function () {
    setInterval("clock()", 1000);
});

var clock = (x) => {
    var currentTime = new Date(),
        h = currentTime.getHours(),
        m = currentTime.getMinutes(),
        s = currentTime.getSeconds();

    var hms = [];
    hms.push(currentTime.getHours());
    hms.push(currentTime.getMinutes());
    hms.push(currentTime.getSeconds());

    for (var i = 0; i < hms.length; i++) {
        hms[i] = Number(hms[i]).toString(2);
        while (hms[i].length <= 5) {
            hms[i] = "0" + hms[i];
        }
    }

    h = Number(h).toString(2);
    m = Number(m).toString(2);
    s = Number(s).toString(2);

    document.getElementById(
        "clock"
    ).innerHTML = `<h2>${hms[0]}</h2><h2>${hms[1]}</h2><h2>${hms[2]}</h2>`;
};
