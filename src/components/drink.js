import "./drink.css";
import Data from "../assets/data.json";
import React, { useState } from "react";

const CharacterImage = ({ Character, onSelectCharacter }) => (
  <img
    key={Character.id}
    alt={Character.Name}
    src={require(`../assets/${Character.Border}`)}
    onClick={() => onSelectCharacter(Character)}
  />
);

const SliderMenu = ({ onSelectCharacter }) => {
  return (
    <div className="slider-menu">
      {Data.map((Character) => (
        <CharacterImage
          Character={Character}
          onSelectCharacter={onSelectCharacter}
        />
      ))}
    </div>
  );
};

const DrinkImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="test" className="drink-image"></img>;
};

const DrinkMenu = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const onSelectCharacter = (Character) => {
    if (!Character) return null;
    setSelectedCharacter(Character);
  };

  return (
    <div className="drink-menu">
      <h1>Es Jelly</h1>
      <SliderMenu onSelectCharacter={onSelectCharacter} />
      <div className="drink-menu-image drink-container">
        {selectedCharacter && (
          <>
            <DrinkImage
              imageUrl={require(`../assets/${selectedCharacter.Image}`)}
            />
            <div className="price">
              <h1>{selectedCharacter.Name}</h1>
              <h2>{selectedCharacter.Harga}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DrinkMenu;
