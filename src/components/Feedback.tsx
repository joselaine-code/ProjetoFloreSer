import Image from "next/image";
import React, { HTMLProps } from "react";
import styles from "../styles/pages/quiz/FeedBack.module.css";

interface IFeedbackScreenProps {
  picture: string;
  title: string;
  text: string;
  color: string;
}

const index = ({ picture, title, text, color }: IFeedbackScreenProps) => {
  return (
    <div className={styles.feedback}>
      <Image src={picture} alt="flower" width={141} height={138} />
      <h2 style={{ color: color }}>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default index;
