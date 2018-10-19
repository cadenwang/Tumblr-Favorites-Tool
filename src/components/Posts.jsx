import React, { Component } from 'react';
import styled from 'styled-components';

import Post from './Post.jsx';

const Div = styled.div`
  min-height: 100vh;
  color: white;
  border-radius: 4px;
  /* border: 2px solid black; */
  background-color: black;
`

const Header = styled.div`
  padding: 25px;
  font-size: 20px;
  text-align: center;
  border-bottom: 2px solid white;
  border-radius: 4px;
`

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Div>
        <Header>
          POSTS
        </Header>
        {this.props.posts.map((post, index) => <Post post={post} postIndex={index} addToFavorites={this.props.addToFavorites} />)}
      </Div>
    );
  }
}