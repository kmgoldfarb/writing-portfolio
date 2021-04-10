import React from 'react';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';

const FullPost = (props) => {
    return (
        <Auxiliary>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.body}</p>
        </Auxiliary>
    )
}

export default FullPost;
