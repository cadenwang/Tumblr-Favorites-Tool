import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  margin: 20px;
`

const Video = (props) => {
  function createMarkup() {
    return {__html: props.post.caption}
  }
  return ( 
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div>
        <video width="320" height="240" controls>
          <source src={props.post.video_url} type='video/mp4' />
        </video>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Div>
    </div>
  );
}

export default Video;