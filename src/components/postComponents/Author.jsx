import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 20px 40px 20px 40px;
  font-weight: bold;
  background-color: black;
  color: white;
`

const Button = styled.button`
  float: right;
  border: 1px solid #61f9ad;
  color: #61f9ad;
  border-radius: 4px;
  padding: 3px 10px;
  background-color: black;
`
const RedButton = styled.button`
  float: right;
  border: 1px solid #ff3a65;
  color: #ff3a65;
  border-radius: 4px;
  padding: 3px 10px;
  background-color: black;
`

//Places the blogger's name and the "add and remove favorite" buttons
const Author = (props) => {
  if (props.isFavorited === true) {
    return (
      <Div>
          {props.post.blog_name} 
        <RedButton onClick={(e) => props.removeFromFavorites(props.index)}>
          Remove Favorite
        </RedButton>
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