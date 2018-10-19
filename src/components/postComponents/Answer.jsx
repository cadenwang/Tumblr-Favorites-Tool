import React from 'react';
import styled from 'styled-components';

import Author from './Author.jsx';

const Div = styled.div`
  margin: 20px;
`
const Asker = styled.div`
  font-weight: bold;
`
const Question = styled.div`
  background: lightgray;
  padding: 20px;
`

//Handles Answer type posts

const Answer = (props) => {
  function createMarkup() {
    return {__html: props.post.answer}
  }
  return (
    <div>
      <Author post={props.post} index={props.index} isFavorited={props.isFavorited} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
      <Div>
        <Question>
          <Asker>
            {props.post.asking_name + ' asked:'}
          </Asker>
          <div>
            {props.post.question}
          </div>
        </Question>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Div>
    </div>
  )
}

export default Answer;