import React, {Component} from 'react';
import styled from 'styled-components';

import SearchButton from './searchComponents/SearchButton.jsx'

const Form = styled.form`
  padding: 24px 0 24px 15%;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: #42cef4;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid black;

`

const Input = styled.input`
  margin: 15px;
  width: 50;
  border-radius: 4px;
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