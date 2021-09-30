import React from 'react';
import classes from './Biography.module.css';

function Biography(props) {
  const bodyHtmlText = props.body.html;
  const subheadHtmlText = props.subhead.html;
  console.log(subheadHtmlText);

  return (
    <div className={classes.profile}>
      <div className={classes.name}>{props.name}</div>
      <div
        className={classes.subhead}
        dangerouslySetInnerHTML={{ __html: subheadHtmlText }}
      />
      <div
        className={classes.body}
        dangerouslySetInnerHTML={{ __html: bodyHtmlText }}
      />
      <img
        className={classes.image}
        alt="Daniella Goldfarb"
        src={props.image.url}
      />
    </div>
  );
}

export default Biography;
