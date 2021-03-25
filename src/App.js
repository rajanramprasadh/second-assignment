import React, { useState} from 'react';
import './App.css';

import LengthFinder from './LengthFinder/LengthFinder';
import TextValidation from './TextValidation/TextValidation';
import CharComponent from './CharComponent/CharComponent';

function App() {

  const [length, setLength] = useState(0);
  const [characters, setCharacters] = useState(null);
  
  const charactersChangeHandler = (event) => {
    const characters = event.target.value;
    setCharacters(characters);
    setLength(characters.length);
  }

  const charactersRemoveHandler = (charIndex) => {
    const chars = characters.split('');
    chars.splice(charIndex, 1);
    setCharacters(chars.join(''));
  }

  let chars = [];
  if (length > 0) {
    chars = (
      <div>
        {
          characters.split('').map((character, index) => {
            return <CharComponent char={character} key={index} remove={() => charactersRemoveHandler(index)} />
          })
        }
      </div>
    )
  }

  return (
    <div className="App">
      <LengthFinder changed={charactersChangeHandler} length={length} value={characters} />
      <TextValidation length={length} />
      {chars}
    </div>
  );
}

export default App;
