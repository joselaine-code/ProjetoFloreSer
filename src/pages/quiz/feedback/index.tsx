import React, { useEffect, useState } from "react";
import FeedbackScreen from "../../../components/Feedback";
import feedback from "../../../utils/feedback.json";
import styles from "../../../styles/pages/quiz/FeedBack.module.css";
import NavBar from "../../../components/nav/NavBar";
import Footer from "../../../components/footer/Footer";
import TooltipRemake from "../../../components/TooltipRemake";

const index = () => {
  const [pontos, setPontos] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setPontos(parseInt(localStorage.getItem("PONTOS")));
    setLoading(false);
  }, []);

  if (loading && pontos === undefined) {
    return <div className={styles.ldsDualRing} />;
  }

  if (pontos === 0) {
    return (
      <>
        <FeedbackScreen
          color="#379573"
          picture={feedback.saudavel.picture}
          title={feedback.saudavel.title}
          text={feedback.saudavel.text}
        />
        <TooltipRemake />
      </>
    );
  } else if (pontos === 1) {
    return (
      <>
        <FeedbackScreen
          color="#BABC52"
          picture={feedback.abusivoLeve.picture}
          title={feedback.abusivoLeve.title}
          text={feedback.abusivoLeve.text}
        />
        <TooltipRemake />
      </>
    );
  } else if (pontos === 2) {
    return (
      <>
        <FeedbackScreen
          color="#E77D00"
          picture={feedback.abusivoModerado.picture}
          title={feedback.abusivoModerado.title}
          text={feedback.abusivoModerado.text}
        />
        <TooltipRemake />
      </>
    );
  } else if (pontos >= 3) {
    return (
      <>
        <FeedbackScreen
          color="#E11A0D"
          picture={feedback.abusivoGrave.picture}
          title={feedback.abusivoGrave.title}
          text={feedback.abusivoGrave.text}
        />
        <TooltipRemake />
      </>
    );
  } else {
    <div></div>;
  }
};

export default index;
