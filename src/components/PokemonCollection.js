import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


function PokemonCollection({cards}) {

  return (
    <div>
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {cards.map((card) => (
        <PokemonCard
        key={card.id} name={card.name} hp={card.hp} frontImage={card.sprites.front} backImage={card.sprites.back} />
    ))}
    </Card.Group>
    
    </div>
  );
}

export default PokemonCollection;
