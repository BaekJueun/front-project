import React, { Component } from 'react'
import EditorUser from './EditorUser';
import EditoerWrite from './EditoerWrite';
import './Editor.css';


export default class Editor extends Component {
  render() {
    return (
      <div className="editorContainer">
        <EditorUser />    
        <EditoerWrite />        
      </div>
    )
  }
}
