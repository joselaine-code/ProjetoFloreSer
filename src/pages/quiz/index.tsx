import React, { useEffect, useState } from "react";
import questions from "../../utils/questions.json";
import QuizOption from "../../utils/QuizOption";
import Link from "next/link";
import styles from "../../styles/pages/quiz/Quiz.module.css";
import Banner from "../../components/header/Banner";

const index = () => {
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    if (localStorage.getItem("PONTOS")) {
      localStorage.removeItem("PONTOS");
    }
  }, []);

  const handlePressButton = () => {
    localStorage.setItem("PONTOS", `${points}`);
  };

  return (
    <div>
      <Banner />
      <div>
        <h2 className={styles.h2Quiz}>Meu relacionamento é abusivo?</h2>
        {questions.perguntas.map((question, index) => (
          <div key={index} className={styles.perguntas}>
            <QuizOption
              points={setPoints}
              basePoints={points}
              value={question.categoria}
              text={question.pergunta}
            />
          </div>
        ))}
      </div>
      <div onClick={handlePressButton} className={styles.btnTerminei}>
        <Link href="/quiz/feedback">Terminei</Link>
      </div>
    </div>
  );
};

export default index;
