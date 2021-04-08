import React from 'react';

const Post = (props) => {
    
    let bodyText = props.body;
    const markup = {__html: bodyText};

    return (
        <div>
            <h2>{props.title}</h2>
            <div dangerouslySetInnerHTML={markup} />
        </div>
    )
}

export default Post;