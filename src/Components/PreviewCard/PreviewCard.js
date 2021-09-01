import React from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './PreviewCard.module.css';
import Image from '../../images/round-arrow-right.png';

const PreviewCard = props => {
  return (
    <>
      <Link to={'/posts/' + props.slug} className={classes.Link}>
        <div className={classes.TitleContainer}>
          <div className={classes.title}>
            {props.title}
            <img className={classes.arrow} src={Image} alt="right arrow" />
          </div>
        </div>
      </Link>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.date}>{props.date}</div>
    </>
  );
};

export default PreviewCard;
