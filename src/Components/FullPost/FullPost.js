import React from 'react';
import classes from './FullPost.module.css';

const FullPost = props => {
  const htmlText = props.body;

  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.date}>{props.date}</div>
      <div
        className={classes.body}
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />
    </>
  );
};

export default FullPost;
