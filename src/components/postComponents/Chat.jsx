import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

import ChatMessage from './ChatMessage.jsx';

const Div = styled.div`
  margin: 20px;
`

const Chat = (props) => {
  return (
    <Div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      {props.post.dialogue.map((message, index)=> <ChatMessage chat={message} />)}
    </Div>
  )
}

export default Chat;