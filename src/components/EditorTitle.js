import React, { Component } from 'react'

export default class EditorTitle extends Component {
  render() {
    return (        
    <div className="editorTitle">
        <textarea 
            className="editorTitleInput"
            placeholder="제목" 
            name="title"            
        >
        </textarea>
    </div>
    )
  }
}
