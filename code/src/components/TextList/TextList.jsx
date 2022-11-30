import React from "react";
import SingleText from "../SingleText/SingleText";
import styles from "./TextList.module.css";
import { format } from "date-fns";

/* 
- This component renders an array of thoughts from the HappyThoughts API making a list and rendered the list by using the map method.
- While the API request is being handled, the 'loading' state is set to true. 
- 
*/

const TextList = (props) => {
  if (props.loading) {
    return <h4>Happy thoughts incoming...</h4>;
  }
  console.log('###### list', props);

  return (
    <div className={styles.wrapper}>
      {props.list.map((singleText) => {
        return (
          <section>
            <div key={singleText._id} className={styles.sectionDescription}>
              <SingleText
                description={singleText.message}
                checked={singleText.isChecked}
                heart={singleText.hearts}
              />
              <div className={styles.likeDatediv}>
                <div className={styles.likePlusLikeCounter}>
                  <button
                    type="submit"
                    onClick={() => props.onNewLikeSubmit(singleText._id)}
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

                  <p className={styles.likeCounter}>
                    {" "}
                    ×  {singleText.hearts|| 0}{" "}
                  </p>
                </div>
                <p>{format(new Date(singleText.createdAt), 'yyyy-MM-dd')}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TextList;
