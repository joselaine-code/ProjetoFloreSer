import React, { Dispatch, SetStateAction} from "react";
import styles from "../styles/pages/quiz/Quiz.module.css"

interface Props {
  text: string;
  points: Dispatch<SetStateAction<number>>;
  basePoints: number;
  value: number;
}

const index = ({ text, points, value, basePoints }: Props) => {

  const handleClick = ({ target }) => {
    const checked = target.checked

    if (checked) {
      points(basePoints + value);
    } else {
      points(basePoints - value);
    }
  };
  return (
    <div className={styles.optionsContainer}>
      <div className={styles.options}>
        <div className={styles.checkbox}>
          <label>
            <p>{text}</p>
            <input type="checkbox" onClick={handleClick} />
            <span></span>
          </label>

        </div>
      </div>
    </div>
  );
};

export default index;