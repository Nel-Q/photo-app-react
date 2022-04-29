import React from "react";
import { getHeaders } from "./utils";

class AddComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            postId: this.props.postId
        };
        this.commentAreaInputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.requeryPost= this.props.requeryPost.bind(this);
        this.submitKeyPressedEnter = this.submitKeyPressedEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(ev){
        console.log('adding comment')
        this.setState({ value: ev.currentTarget.value });
    }

    submitKeyPressedEnter(ev) {
        if(ev.key === 'Enter'){
            console.log(this.state.value)
        }
    }

    handleSubmit(ev){
        ev.preventDefault()
        const postData = {
            "post_id": this.state.postId,
            "text": this.state.value
        }
        console.log(postData)
        fetch('/api/comments',{
            method: "POST",
            headers: getHeaders(),
            body:JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            this.requeryPost();
            this.setState({ value: ''})
            this.commentAreaInputRef.current.focus()
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className='add-comment'>
                <div className="input-holder">
                    <input className="comment-textbox"
                    ref={this.commentAreaInputRef}
                    aria-label="Add a comment"
                    placeholder="Add a comment"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.submitKeyPressedEnter}
                    ></input>
                </div>
                <button className="link">Post</button>
            </form>
        )
    }
}

export default AddComment;