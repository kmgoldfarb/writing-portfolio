import React from 'react';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';
import classes from './PreviewCard.module.css';

const PreviewCard = (props) => {

        return (
            <Auxiliary>
                <div className={classes.title}>{props.title}</div>
                <div>{props.description}</div>
                <div>{props.date}</div>
            </Auxiliary>
        );

    }

export default PreviewCard;