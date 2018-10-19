import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

import ChatMessage from './ChatMessage.jsx';

const Div = styled.div`
  margin: 20px;
`

//Handles Chat type posts
const Chat = (props) => {
  return (
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div>
      {props.post.dialogue.map((message, index)=> <ChatMessage chat={message} />)}
      </Div>
    </div>
  )
}

export default Chat;