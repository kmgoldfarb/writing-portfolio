import React from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './PreviewCard.module.css';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';

const PreviewCard = (props) => {

        return (
            <Auxiliary>
                <Link to={'/posts/' + props.slug} className={classes.Link}>
                    <div className={classes.title}>{props.title}</div>
                </Link>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.date}>{props.date}</div>
            </Auxiliary>
        );

    }

export default PreviewCard;