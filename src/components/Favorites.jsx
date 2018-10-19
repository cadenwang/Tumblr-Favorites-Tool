import React, {Component} from 'react';
import styled from 'styled-components';

import Post from './Post.jsx';

const Div = styled.div`
  color: white;
  height: 97%;
  border-radius: 4px;
  background-color: black;
  border-left: 2px solid white;
`

const Header = styled.div`
  background-color: black;
  padding: 25px;
  font-size: 20px;
  text-align: center;
  border-bottom: 2px solid white;
  border-radius: 4px;
`
const Favorites = (props) => {
  return (  
    <Div>
        <Header>
          FAVORITES
        </Header>
        {props.favorites.map((post, index) => <Post post={post} index={index} favorite={true} removeFromFavorites={props.removeFromFavorites}/> )}
      </Div>
  );
}

export default Favorites;
