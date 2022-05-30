// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key: "0af966be819d35e457e77e2b9d524495",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"  
}

const searchInputBox = document.getElementById('input-box');

//Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        //If doesn't want to block display in starting, just remove the below line and from style.css remove display from weather-body
        document.querySelector('.weather-body').style.display = "block";
    }
});

//Get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//Show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    }
    else if(weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
    }
    else if(weatherType.textContent == 'Fog') {
        document.body.style.backgroundImage = "url('images/fog.jpg')";
    }
    else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
    } 
    else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    }
    else if(weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
    }
    else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    }
    else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/fog.jpg')";
    }
    else if(weatherType.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('images/dust.jpg')";
    }
    else if(weatherType.textContent == 'Dust') {
        document.body.style.backgroundImage = "url('images/dust.jpg')";
    }
    else if(weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
    }


}

//Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${year}, ${day}`;

}
