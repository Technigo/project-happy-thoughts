import React from 'react';
import styles from './Card.module.css';

export const Card = (props) => {
  console.log(props);
  return (
    <div className={`${styles.card} ${styles[props.type]}`}>
      {props.children}
    </div>
  );
};
