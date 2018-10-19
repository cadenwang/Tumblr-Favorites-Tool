import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  padding: 6px 20px;
  margin-left: 5%;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  font-size: 16px;
`
const SearchButton = (props) => {
  return (  
    <Button onClick={props.handleSearch}>
      Search
    </Button>
  );
}

export default SearchButton;