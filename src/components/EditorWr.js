import React, { Component } from 'react'
import EditorUser from './EditorUser';
import EditorTitle from './EditorTitle';
import EditoerContents from './EditoerContents';
import './Editor.css';


export default class EditorWr extends Component {
  render() {
    return (
      <div className="editorWr">
        <EditorUser />    
        <EditorTitle />
        <EditoerContents />        
      </div>
    )
  }
}
