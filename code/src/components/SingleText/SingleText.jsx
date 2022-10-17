import React from "react";
import styles from "./SingleText.module.css";

const SingleText = ({ description , heart}) => {
  if (!description === undefined) return;
  <p>No Data found! </p>;

  return (
    <section className={styles.sectionSingleText}>
      <p>{description}</p>
      <p>{heart}</p>
     
    </section>
  );
};

export default SingleText;
