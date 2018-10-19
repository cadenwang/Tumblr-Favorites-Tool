import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 20px 40px 20px 40px;
  border-bottom: 2px solid black;
  font-weight: bold;
`

const Button = styled.button`
  float: right;
  background-color: #42cef4;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  padding: 3px 10px;
`

const Author = (props) => {
  if (props.isFavorited === true) {
    return (
      <Div>
          {props.post.blog_name} 
        <Button onClick={(e) => props.removeFromFavorites(props.index)}>
          Remove from Favorites
        </Button>
      </Div>
    );
  } else {
    return (
      <Div>
          {props.post.blog_name} 
        <Button onClick={(e) => props.addToFavorites(props.post, props.postIndex)}>
          Add to Favorites
        </Button>
      </Div>
    );
  }
}

export default Author;