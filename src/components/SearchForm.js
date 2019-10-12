import React, { useState } from "react";
import { Form, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './components.css';

export default function SearchForm({search}) {
  
  const [character, setCharacter] = useState('')

  const handleSearch = event => {
    setCharacter(event.target.value)
  }

  return (
    <section className="search-form">
      <Form onSubmit = {() => search(character)}>
        <Input
          className='searchbox'
          name='name'
          placeholder='Search Characters'
          value={character}
          onChange={handleSearch}
        />
        <Button type="submit">Search</Button>
     </Form>
    </section>
  );
}
