import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Navigation from './components/Navigation';

import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList';



const App = () => {
  return (
    <Container className='appContainer'>
      <Navigation/>
      <Header/>
      <Route exact path='/' component = {WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
    </Container>  
  );
}

export default App;