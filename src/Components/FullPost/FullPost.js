import React from 'react';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';

const FullPost = (props) => {

    const htmlText = props.body;

    return (
        <Auxiliary>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <div dangerouslySetInnerHTML={{__html: htmlText}} />
        </Auxiliary>
    )
}

export default FullPost;
