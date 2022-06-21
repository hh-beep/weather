/* React */
import { useEffect, useState } from 'react';

/* Style */
import styles from './App.css'
import AppStyle from './AppStyle';

/* Components */
import HeaderArea from './Components/HeaderArea/HeaderArea';
import InputArea from './Components/InputArea/InputArea';
import ShowInfosArea from './Components/ShowInfosArea/ShowInfosArea';





const App = () => {

  const [weather, setWeather] = useState()
  const [location, setLocation] = useState()
  const [position, setPosition] = useState({
    lat: '',
    lon: '',
  })
  const [canSearch, setCanSearch] = useState(false)


  const style = AppStyle()

  if ( canSearch && (position.lat !== '' && position.lon !== '')) {
    async function RequestServer() {
      const base = 'https://api.weatherapi.com/v1/current.json?key=491f432d4c284619b08120422221606&q='
      await fetch(base + `${position.lat},${position.lon}`)
        .then( resp => resp.json() )
        .then( data => {
          setWeather(data.current)
          setLocation(data.location)
        })
        .catch( error => {
          console.log(error)
        })

        console.log(base + `${position.lat},${position.lon}`)
    }
    RequestServer()    
    setCanSearch(false)

  }



  return (
    <section className={ style.Container }>
      <HeaderArea />


      <InputArea 
        setPosition={setPosition}
        setCanSearch={setCanSearch}
      />
      
      
      <ShowInfosArea 
        weather={weather}
        location={location}
      />
    </section>
  );
}

export default App;
