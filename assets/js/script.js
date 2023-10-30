let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celConv() {
    let celsiusValue = parseFloat(celsius.value) || 0;
    let fahrenheitValue = (celsiusValue * 9/5) + 32;
    let kelvinValue = celsiusValue + 273.15;

    fahrenheit.value = fahrenheitValue.toFixed(2);
    kelvin.value = kelvinValue.toFixed(2);
}

function farConv() {
    let fahrenheitValue = parseFloat(fahrenheit.value) || 0;
    let celsiusValue = (fahrenheitValue - 32) * 5/9;
    let kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;

    celsius.value = celsiusValue.toFixed(2);
    kelvin.value = kelvinValue.toFixed(2);
}

function kelConv() {
    let kelvinValue = parseFloat(kelvin.value) || 0;
    let celsiusValue = kelvinValue - 273.15;
    let fahrenheitValue = (kelvinValue - 273.15) * 9/5 + 32;

    celsius.value = celsiusValue.toFixed(2);
    fahrenheit.value = fahrenheitValue.toFixed(2);
}
