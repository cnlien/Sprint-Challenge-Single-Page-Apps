import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const CharacterCard = (props) => {

  console.log(props);
  const [character, setCharacter] = useState(null);

  useEffect(()=> {
    const id = props.match.params.id;
    console.log(id);

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.id]);
  
  const { name, species, gender } = character;
  return(
    <Card>
      <CardBody>
        <CardHeader>{name}</CardHeader>
        <CardText>{species}</CardText>
        <CardText>{gender}</CardText>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;

