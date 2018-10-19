import React, {Component} from 'react';
import styled from 'styled-components';

import SearchButton from './searchComponents/SearchButton.jsx'

const Form = styled.form`
  padding: 30px 0 30px 10vw;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: black;
  border-radius: 4px;
  border-bottom: 2px solid white;

`

const Input = styled.input`
  margin: 15px;
  width: 50;
  border-radius: 5px;
  width: 20%;
`

//Search Container
const Search = (props) => {
  return (  
    <Form>
      Blog:
      <Input type="text" ref={props.blog}></Input>
      Tag:
      <Input type="text" ref={props.tag}></Input>
      <SearchButton handleSearch={props.handleSearch}/>
    </Form>
  );
}

export default Search;