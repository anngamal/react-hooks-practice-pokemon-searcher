import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({cards, name , hp, image , frontImage , backImage}) {
  const [isFront ,setIsFront] =useState(true);
  const toggleSprite = () => {
    setIsFront(!isFront);
  };
 

  // function handleClick(){
  //   setIsFront(prevVal => !prevVal)
  // }
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={isFront ? frontImage : backImage} onClick={toggleSprite} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red"  />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
