import React from 'react';
import classes from './Biography.module.css';

function Biography(props) {
    
    const htmlText = props.body.html;
    console.log(htmlText);

    return (
        <div className={classes.profile}>
            <h1>{props.name}</h1>
            <div dangerouslySetInnerHTML={{__html: htmlText}} />
            <img alt='Photo of Daniella Goldfarb' src={props.image.url}/>
        </div>
    )
}

export default Biography;