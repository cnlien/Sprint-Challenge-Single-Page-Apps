import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './components.css';

import SearchForm from './SearchForm.js';

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
        
      <SearchForm/>

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
      <div className="charList">
        <Card className="charCard">
          <CardBody>
            <CardHeader> {name} </CardHeader>
            <CardText>{ species }</CardText>
            <CardText>{ gender }</CardText>
          </CardBody>
        </Card>
      </div>
  );
}

export default CharacterList;