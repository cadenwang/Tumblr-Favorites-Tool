import React from 'react';
import styled from 'styled-components';

const Img=styled.img`
  padding: 20px;
`

//Handles the sizing of Photo type posts, starting from smaller photos to original size
const PhotoSize = (props) => {
  if (props.photo.alt_sizes[4]) {
    return (  
      <Img src={props.photo.alt_sizes[4].url} />
    );
  } else if (props.photo.alt_sizes[3]) {
    return (
      <Img src={props.photo.alt_sizes[3].url} />
    )
  } else {
    return (
      <Img src={props.photo.original_size.url} />
    )
  }
}

export default PhotoSize;