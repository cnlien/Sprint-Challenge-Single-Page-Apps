import React, { useState } from "react";
import { Form, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './components.css';

export default function SearchForm({search}) {
  
  return (
    <section className="search-form">
      <Form>
        <Input
          className='searchbox'
          name='name'
          placeholder='Search Characters'
        />
        <Button type="submit">Search</Button>
     </Form>
    </section>
  );
}
