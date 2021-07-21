import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/pages/quiz/Remake.module.css"

const TooltipRemake = () => {
  return (
    <div>
      <div className={styles.refazer}><Link href="/quiz">Refazer Teste</Link></div>
      <div className={styles.fortaleca}>
      <p>
        Fortaleça nosso trabalho, vamos juntas mudar a realidade das mulheres,
        faça uma doação aqui:
      </p>
      </div>
      <div className={styles.contribua}><Link href="/contrib">CONTRIBUA</Link></div>
      <div className={styles.containerRedes}>
        <a>
          <div className={styles.face}><Image src="/svg/Facebook.svg" width={31} height={31}></Image></div>
          <div className={styles.tooltipFace}>Facebook</div>
        </a>
        <a>
          <div className={styles.insta}><Image src="/svg/Instagram.svg" width={31} height={31}></Image></div>
          <div className={styles.tooltipInsta}>Instagram</div>
        </a>
        <a>
          <div className={styles.email}><Image src="/svg/Email.svg" width={31} height={31}></Image></div>
          <div className={styles.tooltipEmail}>E-mail</div>
        </a>
      </div>
    </div>
  );
};

export default TooltipRemake;
