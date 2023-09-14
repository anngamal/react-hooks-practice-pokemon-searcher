import React , {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage({cards, setCards}) {
   const [search ,setSearch] =useState("")
   
  
   const filteredPokemon = cards.filter(poke =>{
    return poke.name.toLowerCase().includes(search.toLowerCase())
   })
   console.log(filteredPokemon)
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search  setSearch={setSearch}/>
      <br />
      <PokemonCollection cards={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
