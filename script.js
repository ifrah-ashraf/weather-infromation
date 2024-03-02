// now it's time to grind some js engine



let form = document.querySelector(".search-bar");
let user = document.getElementById("inputField");
let Temp = document.getElementById("icon-1-txt");
let Wind = document.getElementById("icon-2-txt");
let Humidity = document.getElementById("icon-3-txt");


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const cityName = user.value;
    getWeatherData(cityName)
        .then(info => {
            displayData(info);
        })
        .catch( error => {
            console.error("Error", error)
        });
   
});

async function getWeatherData(cityName) {

    const apiKey = "52ee3ad0c02f9180a60962188408e862";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);

        const data = await response.json();
        
        return data
        
    }
    catch (error) {
        console.error('Error ', error);
    }

}

function displayData(info) {
    Temp.innerText = info.main.temp;
    Humidity.innerText = info.main.humidity;
    Wind.innerText = info.wind.speed;
}
