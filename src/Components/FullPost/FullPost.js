import React from 'react';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';
import classes from './FullPost.module.css';

const FullPost = (props) => {

    const htmlText = props.body;

    return (
        <Auxiliary>
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.date}>{props.date}</div>
            <div className={classes.body} dangerouslySetInnerHTML={{__html: htmlText}} />
        </Auxiliary>
    )
}

export default FullPost;
