// Variables 

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.name')
var iconDisplay = document.querySelector('.icon-display')
var description = document.querySelector('.description')
var temperature = document.querySelector('.temperature')
var humidity = document.querySelector('.humidity')
var windSpeed = document.querySelector('.wind-speed')
var uvi = document.querySelector('.uviIndex')
var day1 = document.querySelector('.day1')
var day2 = document.querySelector('.day2')
var day3 = document.querySelector('.day3')
var day4 = document.querySelector('.day4')
var day5 = document.querySelector('.day5')

// Adding info to page 
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=80d1eb88104cf390886d9f8e6afcbbdc&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data['name'];
        var temperatureValue = data['main']['temp'];
        var descriptionValue = data['weather'][0]['description'];
        var iconDisplayValue = data['weather'][0]['icon'];
        var humidityValue = data['main']['humidity'];
        var windSpeedValue = data['wind']['speed'];
        var latitude = data['coord']['lat'];
        var long = data['coord']['lon'];
        console.log(latitude,long);

        cityName.innerHTML = nameValue;
        description.innerHTML = descriptionValue;
        iconDisplay.innerHTML = iconDisplayValue;
        temperature.innerHTML = temperatureValue;
        humidity.innerHTML = humidityValue;
        windSpeed.innerHTML = windSpeedValue;
        

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+long+'&exclude=hourly,minutely&APPID=80d1eb88104cf390886d9f8e6afcbbdc&units=imperial')
        .then(response => response.json())
        .then(data => {
        console.log(data);

        var uviValue = data['current']['uvi'];

        if(uviValue<=2){
            uvi.style.color="green"

        }else if(uviValue>3&&uviValue<=5){
            uvi.style.color="yellow"

        }else if(uviValue>6&&uviValue<=7){
            uvi.style.color="orange"

        }else if(uviValue>8&&uviValue<=10){
            uvi.style.color="red"
        }else{
            uvi.style.color="violet"
        }

        uvi.textContent = uviValue;
    
        })
    
    })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=80d1eb88104cf390886d9f8e6afcbbdc&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        var day1temp = data['list']['4']['main']['temp'];
        var day2temp = data['list']['12']['main']['temp'];
        var day3temp = data['list']['20']['main']['temp'];
        var day4temp = data['list']['28']['main']['temp'];
        var day5temp = data['list']['36']['main']['temp'];

        day1.innerHTML = day1temp;
        day2.innerHTML = day2temp;
        day3.innerHTML = day3temp;
        day4.innerHTML = day4temp;
        day5.innerHTML = day5temp;
    })    
});


