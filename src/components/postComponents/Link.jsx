import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  margin: 20px;
`

const A = styled.a`
  font-weight: bold;
  font-size: 18px;
`
//Handles Link type posts
const Link = (props) => {
  function createMarkup() {
    return {__html: props.post.description}
  }
  return (  
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div>
        <A href={props.post.url}>{props.post.title}</A>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </Div>
    </div>
  );
}

export default Link;