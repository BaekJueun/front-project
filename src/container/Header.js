import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Editor from '../components/Editor';
import Card from '../Card/Card';
import './Header.css';
export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <div className="inner">
                <div className="navLogo"><Link to="/" component={Card}>홈</Link></div>
                <div className="navWrite"><Link to="/write" component={Editor}>글쓰기</Link></div>
            </div>
        </div>
    )
  }
}
