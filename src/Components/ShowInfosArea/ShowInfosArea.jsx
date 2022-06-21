import { useState, useEffect } from "react"




const ShowInfosArea = ({  weather, location  }) => {
  
  const [conditions, setConditions] = useState('')
  var nameWeather = ''


  console.log(location)


  useEffect( () => {
    async function getConditions () {
      await fetch("https://www.weatherapi.com/docs/conditions.json")
        .then(resp => resp.json())
        .then(data => setConditions(data))
    }
    getConditions()
  }, [])




  
  if ( weather === undefined || weather === '') {



    return (
      <section>
        <h1>sem infos</h1>
      </section>
    )
  }



  else {



    conditions.forEach( elem => {
      if (elem.day == weather.condition.text) {
        nameWeather = elem.languages[20].day_text
      }
      else if (elem.night == weather.condition.text) {
        nameWeather = elem.languages[20].night_text
      }
    })



    return (
      <section>
        <section>
          <h1>Sobre o Local</h1>
          <p>cidade: {location.name}</p>
          <p>Regiao: {location.region}</p>
          <p>Pais: {location.country}</p>
        </section>
        <section>
          <h1>Sobre o Clima</h1>
          <img src={weather.condition.icon}/>
          <p>Clima: {nameWeather}</p>
          <p>temperatuda: {weather.temp_c}° graus</p>
          <p>velocidade dos ventos: {weather.wind_kph} km/h</p>
        </section>
      </section>
    )
  }
}

export default ShowInfosArea;