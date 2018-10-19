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

const Link = (props) => {
  function createMarkup() {
    return {__html: props.post.description}
  }
  return (  
    <Div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <A href={props.post.url}>{props.post.title}</A>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </Div>
  );
}

export default Link;