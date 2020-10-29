import React from 'react'
import {Link} from 'react-router-dom';

function PostPreview({_id,title}){
    return(
        <div className="post-preview">
            <Link to={`/post/${_id}`}>
                <h2 className="post-title">
                   {title}
                </h2>
            </Link>
            <p className="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on September 24, 2019</p>
          </div>
    )
}

export default PostPreview;
