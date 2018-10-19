import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  margin: 20px;
`

//Handles Audio type posts
const Audio = (props) => {
  function createMarkup(type) {
    return {__html: type}
  }
  return (
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div>
        <div dangerouslySetInnerHTML={createMarkup(props.post.embed)}/>
        <div dangerouslySetInnerHTML={createMarkup(props.post.caption)}/>
      </Div>
    </div>
  )
}

export default Audio;