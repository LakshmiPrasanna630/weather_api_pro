let form =document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData=async()=>{
        let key="f6602cb89c78f1ea7ce1618eed4fb00a"
        let place=document.querySelector("#location").value
        // console.log(place)
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        // console.log(data)
        let finalOutput=await data.json()
        
        let finalCondition=(finalOutput.weather[0].main).toLowerCase()
        // console.log(finalOutput)

        let tempValue=document.querySelector(".temp")
        let humidValue=document.querySelector(".humid")
        let finalTemp=Math.round(finalOutput.main.temp-273)
        let finalHumid=Math.round(finalOutput.main.humidity)
        tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid} KMPH`

        let h3=document.querySelector("h3")
        h3.innerHTML=`${finalCondition}`

        let weatherImage=document.getElementById("weatherimage")
        let background=document.getElementById("main_container")
        switch(finalCondition)
        {
        case  "dust" :
        weatherImage.src="./assets/dust.jpg"
        background.style.backgroundImage="url(./assets/dust.gif)"
        break;
        case "clouds" :
        background.style.backgroundImage="url(./assets/clouds.gif)"
        weatherImage.src='./assets/clouds.jpeg'
        break;
        case "haze" :
        weatherImage.src='./assets/haze.jpeg'
        background.style.backgroundImage="url(./assets/haze.gif)"
        break;
        case "rain" :
        weatherImage.src='./assets/rain.jpeg'
        background.style.backgroundImage="url(./assets/rain gif.gif)"
        break;
        case "snow" :
        weatherImage.src='./assets/snow.jpeg'
        background.style.backgroundImage="url(./assets/snow.gif)"
        break;
        case "sunny" :
        weatherImage.src='./assets/sunny.jpeg'
        background.style.backgroundImage="url(./assets/sunny.gif)"
        break;
        default :
        weatherImage.src='./assets/weather favicon.webp'
        }
    }
fetchData()
})

