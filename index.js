function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerText = "Please enter a city name";
    } else {
        result.innerText = `Weather in ${city}: Sunny, 30°C`;
    }
}
