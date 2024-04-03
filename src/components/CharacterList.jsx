import { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css';


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
       <h1>React vite js | API Rick Morty | AXIOS</h1>
      <h1>Characters Rick and Morty</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <div>{character.name}</div>
            <div>Status: {character.status}</div>
            <div>Species: {character.species}</div>
            <div>Gender: {character.gender}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
