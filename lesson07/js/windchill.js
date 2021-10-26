var temp = document.getElementById("temp");
console.log(temp.textContent);

var wind = document.getElementById("wind");
console.log(wind.textContent);

var chill = document.getElementById("chill")

if ((temp.textContent >= 50) && (wind.textContent >= 3)) {
    var t = temp.textContent;
    var s = wind.textContent;
    s = Math.pow(s, 0.16);
    var f = 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
    chill.textContent = f.toFixed();
    console.log(f);
}
else {
    console.log("N/A");
}