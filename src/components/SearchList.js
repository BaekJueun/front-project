import React, { Component } from 'react'
import './SearchList.css';


export default class SearchList extends Component {
  render() {
    return (
      <div className="searchList">
        <div className="searchCard">
          <div className="thumbnailImgame"></div>
          <div className="">
            <div className="">타이틀출력입니다.</div>
            <div className="">내용출력입니다.</div>
            <div className="">
              <div className="">아이디출력</div>
              <div className="">
                <ul>
                  <li className="">좋아요</li>
                  <li className="">댓글</li>
                  <li className="">링크</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
