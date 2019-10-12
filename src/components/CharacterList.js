import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CharacterList = props => {
  const [characters, setCharacters] = useState([])
  console.log(props);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
        .catch(err => {
          console.error('Server Error', err);
        });
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    getCharacters();
  }, []);

  return (
    <Card>
      <CardBody>
      <section className="character-list">
        {characters.map(character => (
          <CharDetails key={ character.id } character={ character }/>
        ))}
      </section>
      </CardBody>
    </Card>
  );
}

function CharDetails ({ character }) {
  const { name, species, gender} = character;
  return (
    <Link to ={`/character/${character.id}`}>
      <div className="character-card">
        <h2>{ name }</h2>
        <p className="character-species">{ species }</p>
        <p className="character-gender">{ gender }</p>
      </div>
    </Link>
  );
}

export default CharacterList;