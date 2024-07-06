let apiKey = 'fdb3f32499b648ab81d205649240507'

let Cityinput = document.querySelector('#input')
let Search = document.querySelector('#Search')
let cityName = document.querySelector('#city')
let countryName = document.querySelector('#country')
let Temp = document.querySelector('#temp')
let time = document.querySelector('p')
let weatherIcon = document.querySelector('#weatherIcon')
let conditionText = document.querySelector('#C_text')
let humidity = document.querySelector('#humidity')
let wind = document.querySelector('#wind')
let humidityIcon = document.querySelector('#humidityIcon')
let windIcon = document.querySelector('#windIcon')
let maincontent = document.querySelector('#maincontent')
let TextMsg = document.querySelector('#TextMsg')



async function getdata(apiKey, Cityinput) {
    let weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Cityinput}&aqi=yes`)
    return await weatherData.json()
}

async function updateWeatherDetails(input) {
    TextMsg.classList.add('hidden')
    maincontent.classList.remove('hidden')
    maincontent.classList.add('md:flex')
    let result = await getdata(apiKey, input)
    cityName.innerText = `${result.location.name}, ${result.location.region}`
    countryName.innerText = result.location.country
    Temp.innerText = `${result.current.temp_c}°C`
    time.innerText = result.location.localtime
    weatherIcon.src = result.current.condition.icon
    conditionText.innerText = result.current.condition.text
    humidity.innerText = ` ${result.current.humidity}% Humidity`
    humidityIcon.src = 'https://cdn-icons-png.freepik.com/512/9342/9342439.png'
    wind.innerText = `${result.current.wind_kph}Km/h wind speed`
    windIcon.src = 'https://cdn-icons-png.flaticon.com/512/3731/3731279.png'
    Cityinput.value = '';
}

Search.addEventListener('click', async () => {
    let input = Cityinput.value
    await updateWeatherDetails(input)
})

Cityinput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        let input = Cityinput.value
        await updateWeatherDetails(input)
    }
})








