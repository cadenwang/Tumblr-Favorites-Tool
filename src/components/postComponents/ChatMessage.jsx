import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-bottom: 1px dotted black;
  padding: 4px;
`

//Handles each ndividual message inside a Chat post
const ChatMessage = (props) => {
  if (props.chat.name) {
    return (  
      <Div>
        {props.chat.name + ': ' + props.chat.phrase}
      </Div>
    );
  } else {
    return (
      <Div>
        {props.chat.phrase}
      </Div>
    )
  }
}

export default ChatMessage;