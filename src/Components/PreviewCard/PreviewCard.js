import React from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './PreviewCard.module.css';

const PreviewCard = (props) => {

        return (
            <Link to={'/posts/' + props.slug} className={classes.Link}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.date}>{props.date}</div>
            </Link>
        );

    }

export default PreviewCard;