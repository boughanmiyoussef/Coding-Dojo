import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Pokemons, setPokemons] = useState([])
  const Pokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=810")
    .then(response => {
      console.log(response.data)
      setPokemons(response.data.results)
    })
    .catch(error=> console.log("AXIOS ERROR:", error))
  }
  
  
  return (
    <>
      <fieldset>
        <button onClick={Pokemon}>View</button>
        {Pokemons.map(pokemon=> <ul key={pokemon.id}> <li>{pokemon.name}</li> </ul>)}
      </fieldset>
    </>
  )
}

export default App



