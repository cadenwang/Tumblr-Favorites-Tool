import React, {Component} from 'react';
import styled from 'styled-components';

import Post from './Post.jsx';

const Div = styled.div`
  /* margin-left: 4px; */
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
