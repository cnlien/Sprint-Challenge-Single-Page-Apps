import React, { useState } from "react";
import { Form, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <Form>
       <Input
          type="search"
          name="search"
          placeholder="Search Characters"
       />
       <Button type="submit">Search</Button>
     </Form>
    </section>
  );
}
