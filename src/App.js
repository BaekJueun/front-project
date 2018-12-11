import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './container/Header';
import Editor from './components/Editor';
import SearchList from './components/SearchList';
import CommentView from './components/CommentView';
import Card from './Card/Card';
import './App.css';
import './Common.css'

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Card}/>
            <Route path="/write" component={Editor}/>
            <Route path="/SearchList" component={SearchList}/>
            <Route path="/CommentView" component={CommentView}/>
          </div>
        </div>
      </Router>
    )
  }
}
