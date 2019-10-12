import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const CharacterCard = (props) => {
  let character = props.character;
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

