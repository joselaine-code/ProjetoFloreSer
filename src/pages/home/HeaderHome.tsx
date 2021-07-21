import WomanHome from "../../assets/svg/pages/home/WomenHome";
import styles from "../../styles/pages/home/HeaderHome.module.css"
import Btn from "../../components/btns/Btn"

function HeaderHome() {
  return (
    <section className={styles.callTestContainer}>
      <div className={styles.callTest}>
        <h1>Saiba se você vive uma relação abusiva</h1>

        <div className={styles.callTestText}>
          <p>
            Muitas vezes podemos estar em um relacionamento abusivo sem nem nos darmos conta.
            É por isso que criamos este teste: Assinale as situações que já aconteceram no
            seu relacionamento e descubra se o seu relacionamento é saudável ou abusivo.
              </p>
        </div>

        <Btn text="INICIAR O TESTE" target="/quiz" color="any" fontColor="any" icon="none" />
      </div>


      <div className={styles.imgWomen}>
        <WomanHome />
      </div>

    </section>
  )
}

export default HeaderHome