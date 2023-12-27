import { useState } from 'react'
import './App.css'

function App(){
  const [pokemon, setPokemon] = useState([])
  const abc = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=810")
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(response => {
        console.log(response)
        setPokemon(response.results)
      })
      .catch(error => console.log(error))}
  
  return (
    <>
      <fieldset>
        <legend>Pokémon Names</legend>
        <button onClick={abc}>View</button>
        {pokemon.map(pokemon=> <ul key={pokemon.id}> <li>{pokemon.name}</li> </ul>)}
      </fieldset>
    </>
  )
}

export default App