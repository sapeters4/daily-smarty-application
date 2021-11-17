import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from "./recent-posts";



export default class Home extends Component {

  handleSearchBarSubmit = function(query) {
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts />
        </div>
      </div>
    );
  }
}
