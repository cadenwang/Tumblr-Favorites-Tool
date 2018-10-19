import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  padding: 20px;
`

const Text = (props) => {
  function createMarkup() {
    return {__html: props.post.body}
  }
  return ( 
    <Div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <div dangerouslySetInnerHTML={createMarkup()}>
      </div>
    </Div>
  );
}

export default Text;