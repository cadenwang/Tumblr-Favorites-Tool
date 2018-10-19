import React, {Component} from 'react';
import styled from 'styled-components';

import SearchButton from './searchComponents/SearchButton.jsx'

const Form = styled.form`
  padding: 30px 0 30px 10vw;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: black;
  border-radius: 4px;
  /* margin-bottom: 4px; */
  border-bottom: 2px solid white;

`

const Input = styled.input`
  margin: 15px;
  width: 50;
  border-radius: 5px;
  width: 20%;
`

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    return (
      <Form>
          Blog:
          <Input type="text" ref={this.props.blog}></Input>
          Tag:
          <Input type="text" ref={this.props.tag}></Input>
        <SearchButton handleSearch={this.props.handleSearch}/>
      </Form>
    )
  }
}