import React, { useState } from "react";
import { Form, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './components.css';

export default function SearchForm({search}) {
  
  const [searchChar, setSearchChar] = useState({
    name: ''
  });

  const handleChange = e => {
    setSearchChar({...searchChar, name: e.target.value});
  };

  return (
    <section className="search-form">
      <Form onSubmit={() => search(searchChar)}>
        <Input
          onChange={handleChange}
          className='searchbox'
          name='name'
          placeholder='Search Characters'
          value = {searchChar.name}
        />
        <Button type="submit">Search</Button>
     </Form>
    </section>
  );
}
