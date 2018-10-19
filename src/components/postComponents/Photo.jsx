import React from 'react';
import styled from 'styled-components';
import Author from './Author.jsx';

import PhotoSize from './PhotoSize.jsx'

const Div = styled.div`
  padding: 20px;
`

//Handles Photo type posts
const Photo = (props) => {
  function createMarkup() {
    return {__html: props.post.caption}
  }
  return (  
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div dangerouslySetInnerHTML={createMarkup()}>
      </Div>
      {props.post.photos.map((photo, index) => <PhotoSize photo={photo}/>)}
    </div>
  );
}

export default Photo;