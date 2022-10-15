import React from "react";
import SingleText from "../SingleText/SingleText";
import styles from "./TextList.module.css";
import { formatRelative } from "date-fns";
import LikeButton from "../LikeButton/LikeButton";

const TextList = ({ list }) => {
  console.log(list);

  return (
    <div className={styles.wrapper}>
      <section>
        {list.map((singleText) => {
          return (
            <section>
              <div key={singleText._id} className={styles.sectionDescription}>
                <SingleText
                  description={singleText.description}
                  checked={singleText.isChecked}
                />
                <div className={styles.likeDatediv}>
                  <LikeButton />
                  <p>{formatRelative(singleText.date, new Date())}</p>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default TextList;
