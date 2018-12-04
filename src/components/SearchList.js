import React, { Component } from 'react'
import './SearchList.css';


export default class SearchList extends Component {
  render() {
    return (
      <div className="searchList">
        <div className="searchCard">
          <div className="thumbnailImgame"></div>
          <div className="">
            <div>타이틀출력입니다.</div>
            <div>내용출력입니다.</div>
            <div>
              <div>아이디출력</div>
              <div>
                <ul>
                  <li>좋아요</li>
                  <li>댓글</li>
                  <li>링크</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
