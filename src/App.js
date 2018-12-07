import React, { Component } from 'react';
import Editor from './components/Editor';
import SearchList from './components/SearchList';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Editor />
        <SearchList />
      </div>
    )
  }
}
