import React, { Component } from 'react';
import styled from 'styled-components';

import Post from './Post.jsx';

const Div = styled.div`
  min-height: 100vh;
  color: white;
  border-radius: 4px;
  background-color: black;
`

const Header = styled.div`
  padding: 25px;
  font-size: 20px;
  text-align: center;
  border-bottom: 2px solid white;
  border-radius: 4px;
`

//Posts Container
const Posts = (props) => {
  return (  
    <Div>
      <Header>
        POSTS
      </Header>
      {props.posts.map((post, index) => <Post post={post} postIndex={index} addToFavorites={props.addToFavorites} />)}
    </Div>
  );
}

export default Posts;
