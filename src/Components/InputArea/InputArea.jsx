/* React */
import { useState } from 'react'

/* Style */
import InputAreaStyle from './InputAreaStyle'

/* Components */
import InputLat from './Inputs/InputLat'
import InputLon from './Inputs/InputLon'




const InputArea = ({  setPosition, setCanSearch  }) => {

  const style = InputAreaStyle()

  const [results, setResults] = useState({
    lat: '',
    lon: '',
  })
  

  console.log(results)
  
  return (
    <form className={ style.Form }>
      <section>
        <InputLat 
          results={results}
          setResults={setResults}
        />
        <InputLon 
          results={results}
          setResults={setResults}
        />
      </section>
      
      
      <p>Latitude: {results.lat}</p>
      <p>Longitude: {results.lon}</p>

      <button 
        className="Form__Button"
        onClick={(evt) => {
          evt.preventDefault()
          setPosition({
            lat: results.lat,
            lon: results.lon,
          })
          setCanSearch(true)

        }}>
        <p className="Form__ButtonText">Perquisar sobre o clima na sua area</p>
      </button>
    </form>
  )
}




export default InputArea;