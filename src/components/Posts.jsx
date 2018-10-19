import React, { Component } from 'react';
import styled from 'styled-components';

import Post from './Post.jsx';

const Div = styled.div`
  min-height: 100vh;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #42cef4;
`

const Header = styled.div`
  padding: 25px;
  font-size: 20px;
  text-align: center;
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