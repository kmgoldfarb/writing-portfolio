import React from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './PreviewCard.module.css';
import Post from '../Post/Post';

const PreviewCard = (props) => {

        return (
            <Link to={'/posts/' + props.slug}>
                <div className={classes.title}>{props.title}</div>
                <div>{props.description}</div>
                <div>{props.date}</div>
            </Link>
        );

    }

export default PreviewCard;