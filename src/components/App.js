import React, {useState , useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [cards , setCards] = useState([])
  useEffect(()=>{
    fetch(" http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then((cards)=>setCards(cards))
    console.log(cards)
  },[])
  

  return (
    <div className="App">
      <PokemonPage cards={cards}/>
      
    </div>
  );
}

export default App;
