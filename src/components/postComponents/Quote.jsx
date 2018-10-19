import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  margin: 20px;
`
//Handles Quote type posts
const Quote = (props) => {
  function createMarkup() {
    return {__html: props.post.source}
  }
  return (  
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div>
        <blockquote>
          {props.post.text}
        </blockquote>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Div>
    </div>
  );
}

export default Quote;