import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {API_KEY} from '../../key.js';

import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Posts from './Posts.jsx';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: white;
  margin: 10px;
`

const LeftDivs = styled.div`
`


export default class App extends Component {
  constructor(props) {
    super(props);
    this.blog = React.createRef();
    this.tag = React.createRef();
    this.state = {
      posts: [],
      favorites: []
    }
  }
  //search function that queries API
  handleSearch(e) {
    e.preventDefault();
      //If both a tag and a blog are specified-------------------------------------------------------
    if (this.blog.current.value && this.tag.current.value) {
      axios.get(`http://api.tumblr.com/v2/blog/${this.blog.current.value}.tumblr.com/posts?api_key=${API_KEY}&tag=${this.tag.current.value}&filter=raw`)
      .then(data => {
        console.log('this is posts', data.data.response.posts);
        this.setState({
          posts: data.data.response.posts
        })
      }).catch(err => {
        console.log(err);
      });
      //If only a blog is specified but not a tag---------------------------------------------------
    } else if (this.blog.current.value) {
      axios.get(`http://api.tumblr.com/v2/blog/${this.blog.current.value}.tumblr.com/posts?api_key=${API_KEY}&filter=raw`)
      .then(data => {
        console.log('this is posts', data.data.response.posts)
        this.setState({
          posts: data.data.response.posts
        })
      }).catch(err => {
        console.log(err);
      });
      //If only a Tag is specified but not a blog-----------------------------------------------------
    } else if (this.tag.current.value) {
      axios.get(`http://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=${this.tag.current.value}&filter=raw`)
      .then(data => {
        console.log(data.data.response);
        this.setState({
          posts: data.data.response
        })
      }).catch(err => {
        console.log(err);
      });
    }
  }

  addToFavorites(post) {
    let found = false;
    this.state.favorites.forEach((p) => {
      if (p.id === post.id) {
        found = true;
      }
    })
    if (!found) {
      this.state.favorites.push(post);
      this.setState({
        favorites: [...this.state.favorites]
      })
    } else {
      alert('This post is already favorited!');
    }
  }

  removeFromFavorites(index) {
    this.state.favorites.splice(index, 1);
    this.setState({
      favorites: [...this.state.favorites]
    })
  }

  render() {
    return (
      <Wrapper>
        <LeftDivs>
          <Search blog={this.blog} 
                  tag={this.tag} 
                  handleSearch={this.handleSearch.bind(this)}/>
          <Posts posts={this.state.posts} 
                 addToFavorites={this.addToFavorites.bind(this)} 
                 />
        </LeftDivs>
        <Favorites favorites={this.state.favorites} 
                   removeFromFavorites={this.removeFromFavorites.bind(this)}/>
      </Wrapper>
    )
  }
}