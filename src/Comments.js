import React from "react";
import Comment from './Comment';

class Comments extends React.Component{
    render(){
        const lastComment = this.props.comments[this.props.comments.length -1]
        return(
            <div className="comments">
                {this.props.comments.length > 1 
                ?
                <button 
                    className="link" 
                    >
                    View all { this.props.comments.length } comments
                </button> 
                : 
                ''}
                {
                    lastComment ? <Comment text={lastComment.text}
                                        username={lastComment.user.username}
                                        display_time={lastComment.display_time}
                                    /> : ""    
                }
            </div>
        )
    }
}

export default Comments;
