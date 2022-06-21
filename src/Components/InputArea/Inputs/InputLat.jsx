/* React */
import { useState } from "react"



const InputLat = ({  results, setResults  }) => {

  const [graus, setGraus] = useState('')
  const [minutes, setMinutes] = useState('')
  

  return (
    <section>
      <h1>Latitude</h1>
      <div>
        <input 
          type={"number"}
          placeholder='Graus'

          value={ graus }
          onChange={ (e) => {
            setGraus(e.target.value)
          }}
        />
        <label>&#x00B0;</label>
      </div>
      <div>
        <input 
          type={"number"}
          placeholder='Minutos'

          value={ minutes }
          onChange={ (e) => {
            setMinutes(e.target.value)
          }}
        />
        <label>'</label>
      </div>
      

      <button
        onClick={ (e) => {
          e.preventDefault();
          setResults({
            ...results,
            lat: parseFloat(`${graus}.${minutes}`)
          })

          console.log(results)
        }}
      > Definir Latitude </button>
    </section>
  )
}

export default InputLat