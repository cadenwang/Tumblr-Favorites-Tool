import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 20px;
`

const Quote = (props) => {
  function createMarkup() {
    return {__html: props.post.source}
  }
  return (  
    <Div>
      <blockquote>
        {props.post.text}
      </blockquote>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Div>
  );
}

export default Quote;