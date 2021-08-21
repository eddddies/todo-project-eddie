const weather = document.querySelector("#weather")
const city = document.querySelector("#city")



const API_KEY = "a26c206d88456e3eb133508b9bd24211";
const COORDS = "coords";


let isTempDate = true;

function onGeoPositionSuccess(position){

    

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    //localStorage
    localStorage.setItem(COORDS, JSON.stringify({
        latitude: lat,
        longitude: lon
    }))


    getWeather();
}



    function getWeather(){

       const coords =localStorage.getItem(COORDS);
       const lat = JSON.parse(coords).latitude;
       const lon = JSON.parse(coords).longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            

            const tempData = data.main.temp;
            const weatherData = data.weather[0].main;
            const cityData = data.name;
            
            
            if(isTempDate === true){
                weather.innerText = `${tempData}°C`
                isTempDate = false
            }else if(isTempDate === false){

                weather.innerText = `${weatherData}`
                isTempDate = true

            }
            
            city.innerText=`in ${cityData}`

        })
}

function onGeoPositionError(){
    alert("error")
}

navigator.geolocation.getCurrentPosition(onGeoPositionSuccess, onGeoPositionError)

if(localStorage.getItem(COORDS) !== null){
    setInterval(getWeather, 2000)   
}else{
    navigator.geolocation.getCurrentPosition(onGeoPositionSuccess, onGeoPositionError)
}