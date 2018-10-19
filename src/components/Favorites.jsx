import React, {Component} from 'react';
import styled from 'styled-components';

import Post from './Post.jsx';

const Div = styled.div`
  margin-left: 10px;
  color: white;
  height: 97%;
  border-radius: 5px;
  background-color: black;
  border: 1px solid black;
`

const Header = styled.div`
  background-color: black;
  padding: 25px;
  font-size: 20px;
  text-align: center;
`

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Div>
        <Header>
          FAVORITES
        </Header>
        {this.props.favorites.map((post, index) => <Post post={post} index={index} favorite={true} removeFromFavorites={this.props.removeFromFavorites}/> )}
      </Div>
    );
  }
}
