const btnSearch = document.getElementById('btnSearch');
let displayInfo = document.querySelector('.displayInfo');

async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=1d9bf1177c52489fbda183537230509&q=NY', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData)
    displayInfo.textContent = `${weatherData.location.name}: ${weatherData.current.temp_f} °F, ${weatherData.current.condition.text}`;

}
getWeather();


btnSearch.addEventListener('click', function(e) {
    e.preventDefault();
    let url = 'http://api.weatherapi.com/v1/current.json?key=1d9bf1177c52489fbda183537230509&q=';
    let query = document.getElementById('search').value.trim();
    url = url.concat(query);
    fetch(url, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        displayInfo.textContent = `${response.location.name}: ${response.current.temp_f} °F, ${response.current.condition.text}`;
    })
    .catch(err=>{
        alert('Please type a location');
        console.error(err);
    })
});