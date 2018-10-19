import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  margin: 20px;
`

const Audio = (props) => {
  function createMarkup(type) {
    return {__html: type}
  }
  return (
    <Div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <div dangerouslySetInnerHTML={createMarkup(props.post.embed)}/>
      <div dangerouslySetInnerHTML={createMarkup(props.post.caption)}/>
    </Div>
  )
}

export default Audio;