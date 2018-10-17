import React from 'react';
import styled from 'styled-components';

import Search from './Search.jsx';
// import Favorites from './Favorites.jsx';
// import SearchResults from './SearchResults.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

  }
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}