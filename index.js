const searchBtn = document.getElementById("search-btn")
const input = document.getElementById("input-field")
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")
const cityAirQuality = document.getElementById("city-air-quality")


//SEARCH BUTTON//
searchBtn.addEventListener("click", async () =>{
    const value = input.value;
    const result = await getData(value);
    console.log(result)
    cityName.innerText = `${result.location.name},${result.location.country}`
    cityTime.innerText += `${result.location.localtime}`
    cityTemp.innerText += `${result.current.temp_c}`
    cityAirQuality.innerText += `${result.current.air_quality.co}`
})

//FEATCHING DATA USING API//
async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=800582bfe6ab4bc8ae293208230811&q=${cityName}&aqi=yes`)
    return await promise.json();
}


