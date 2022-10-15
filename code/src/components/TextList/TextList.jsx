import React from "react";
import SingleText from "../SingleText/SingleText";
import styles from "./TextList.module.css";
import { formatRelative } from "date-fns";

/* 
- This component renders an array of thoughts from the HappyThoughts API making a list and rendered the list by using the map method.
- While the API request is being handled, the 'loading' state is set to true. 
- 
*/

const TextList = ({ list, loading, handleLikeSubmit, data }) => {
  if (loading) {
    return <h4>Happy thoughts incoming...</h4>;
  }
  console.log(list);

  return (
    <div className={styles.wrapper}>
      {list.map((singleText) => {
        return (
          <section>
            <div key={singleText._id} className={styles.sectionDescription}>
              <SingleText
                description={singleText.description}
                checked={singleText.isChecked}
              />

              <div className={styles.likeDatediv}>
                <div className={styles.likePlusLikeCounter}>
                  <button
                    type="submit"
                    onClick={() => handleLikeSubmit(data._id)}
                    className={styles.likeButton}
                  >
                    <span
                      className="heart-span"
                      role="img"
                      aria-label="heart emoji"
                    >
                      ❤️
                    </span>
                  </button>

                  <p className={styles.likeCounter}> × 0</p>
                </div>
                <p>{formatRelative(singleText.date, new Date())}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TextList;
