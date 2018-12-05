import React, { Component } from 'react'

export default class EditoerWrite extends Component {
    state = {
        title: '',
        contents: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        console.log(this.state);
    }
    render() {
        return (
        <div className="editorWrite">
            <div className="editorTitle">
                <textarea 
                    className="editorTitleInput"
                    placeholder="제목" 
                    name="title"    
                    value={this.state.title}
                    onChange={this.handleChange}        
                >
                </textarea>
            </div>
            <div className="editorContents">
                <textarea
                    className="editorContentsTextarea"
                    placeholder="무슨 이야기를 나누고 싶으세요?"
                    name="contents"
                    value={this.state.contents}
                    onChange={this.handleChange}
                >
                </textarea>
                <div className="editorLeft">
                    <div className="editorFileInput">
                        <span>IMG File</span>
                        <input type="file" multiple accept="image/*" />
                    </div>
                    <div className="editorMovieInput">
                        <span>Movie File</span>
                        <input type="file" accept="video/*" />
                    </div>
                    <div className="editorLink"></div>
                    <ul>
                        <li>BOLD</li>
                        <li>ITALIC</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <button 
                type="submit" 
                className="editorSave"
                onClick={this.handleSubmit}
            >
            게시
            </button>
        </div>
        )
    }
}

