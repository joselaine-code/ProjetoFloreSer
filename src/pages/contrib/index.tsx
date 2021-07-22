import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/Contrib.module.css";
import Btn from "../../components/btns/Btn"

//{} >> valor atribuido a uma variavel
// "">> Propriedade que recebe uma string
const index = () => {
  return (
    <div className={styles.header}>
        <section>
          <div className={styles.donation}>
            <h1>Faça sua doação</h1>
            <p>
              Fortaleça nosso projeto e ajude mulheres a saírem de situações de
              abuso. Fazer uma doação é fazer parte da mudança, é estender a mão
              àquelas que precisam de ajuda!
            </p>
            {/* <p>
              <strong>Escolha um dos meios abaixo </strong>
            </p> */}
          </div>
        </section>

        <section className={styles.pay}>
          {/* <div className={styles.container}>
            <div className={styles.containerMethod}>
              <Image src="/svg/picpay.svg" alt="picpay" width="155" height="50" />
              <div className={styles.button}>
               <Btn color="#21C25E" text="@floreserassociacao" target="google.com" fontColor="white" icon="none" /> 
              </div>
               
            </div>

            <div className={styles.picpayCode}>
              <Image 
                src="/svg/qrcodepicpay.svg"
                alt="QRCODE"
                width="171"
                height="171"
              />
            </div>
          </div> */}

          <div className={styles.container}>
            <div className={`${styles.containerMethod} ${styles.containerPicpay}`}>
              <Image src="/svg/pix.svg" alt="Pix" width="155" height="50" />
              <div className={styles.button}>
                <Btn color="#32BCAD" text="41.588.317/0001-78" target="google.com" fontColor="white" icon="none" />
              </div>
              
            </div>

            <div className={styles.pixCode}>
            <Image
                  className="qrcodepix"
                  src="/svg/qrcodepix.svg"
                  alt="QRCODE"
                  width="171"
                  height="171"
                />
            </div>
          </div>
        </section>
    </div>
  );
};
export default index;
