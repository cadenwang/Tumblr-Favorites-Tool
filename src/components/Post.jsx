import React, { Component } from 'react';
import styled from 'styled-components';

import Video from './postComponents/Video.jsx';
import Text from './postComponents/Text.jsx';
import Photo from './postComponents/Photo.jsx';
import Quote from './postComponents/Quote.jsx';
import Link from './postComponents/Link.jsx';
import Answer from './postComponents/Answer.jsx';
import Audio from './postComponents/Audio.jsx';
import Chat from './postComponents/Chat.jsx';

const Div = styled.div`
  color: white;
  background-color: #42cef4;
  margin: 0 0 0px 0;
  border-top: 6px solid black;
`
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isFavorited: false
    }
  }

  componentDidMount() {
    this.toggleFavorited();
  }

  toggleFavorited() {
    if (this.props.favorite) {
      this.setState({
        isFavorited: true
      })
    }
  }

  render() { 
    console.log(this.props.post);
      //if post type is a 'Photo'------------------------
    if (this.props.post.type === 'photo') {
      return (  
        <Div>
          <Photo post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      );
      //Text---------------------------------------------
    } else if (this.props.post.type === 'text') {
      return (
        <Div>
          <Text post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      );
      //Video--------------------------------------------
    } else if (this.props.post.type === 'video') {
      return (
        <Div>
          <Video post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      )
      //Quote--------------------------------------------
    } else if (this.props.post.type === 'quote') {
      return (
        <Div>
          <Quote post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      )
      //Link--------------------------------------------
    } else if (this.props.post.type === 'link') {
      return (
        <Div>
          <Link post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      )
      //Answer------------------------------------------
    } else if (this.props.post.type === 'answer') {
      return (
        <Div>
          <Answer post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      )
      //Audio-------------------------------------------
    } else if (this.props.post.type === 'audio') {
      return (
        <Div>
          <Audio post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div>
      )
      //Chat--------------------------------------------
    } else if (this.props.post.type === 'chat') {
      return (
        <Div>
          <Chat post={this.props.post} index={this.props.index} isFavorited={this.state.isFavorited} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites}/>
        </Div> 
      )
      //In case there's some kind of post missed-------
    } else {
      return (
        <Div>
          Invalid Post
        </Div>
      )
    }
  }
}