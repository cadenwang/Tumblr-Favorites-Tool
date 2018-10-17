import React from 'react';
import styled from 'styled-components';

import SearchButton from './searchComponents/SearchButton.jsx'

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

  }
  render() {
    return (
      <form>
          Blog Name:
          <input type="text"></input>
          Tag:
          <input type="text"></input>
        <SearchButton />
      </form>
    )
  }
}