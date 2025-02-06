async function weather(city) { //Astana
    // document.querySelector(".city").innerHTML = "";
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric`);
        if(!response.ok) {
            throw new Error("Aqprat alu mumkin bolmady");
        }
        const data = await response.json();

        console.log(data);
        let divElement = document.createElement('div')

        divElement.innerHTML =`
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
            <h4>Weather: ${data.weather[0].description}</h4>
            <p>${data.main.temp}/<span>${data.main.feels_like}</span></p>
            <p>Влажность: ${data.main.humidity}%</p>
            <p>Wind: ${data.wind.speed}m/s</p>
        `

        document.querySelector('.weather-container').appendChild(divElement)
        
    }catch(err){
        console.error(err.message)
    }

}


document.getElementById("btn").addEventListener("click", function(e) {   
    e.preventDefault();
    const city = document.getElementById("input").value
    if(city){
        weather(city) //Astana
    }else{
        alert("Aqparat alu mumkin bolmady!")
    }
});

document.getElementById('mycity').addEventListener('click',function(e){
    e.preventDefault()
    weather("Almaty")
})

let massiv = ["Shymkent","Semey","Pavlodar"]
document.getElementById('kzCities').addEventListener('click',function(e){
    e.preventDefault()
    massiv.forEach((city)=>{
        weather(city)
    })
})