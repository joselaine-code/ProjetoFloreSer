import GroupFooter from "../../assets/svg/footer/GroupFooter"
import styles from "../../styles/components/footer/Footer.module.css"
import Btn from "../btns/Btn"

function Footer() {
  return (
    <footer>
      <article className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <div className={styles.footer}>
            <p className={styles.footerTitle}><b>VOCÊ NÃO ESTÁ SOZINHA</b></p>

            <p className={styles.footerHead}><b>LIGUE 180</b></p>

            <div className={styles.footerText}>
              <p>
                A Central de Atendimento à Mulher é um serviço criado para o combate
                à violência contra a mulher e oferece três tipos de atendimento:
                registros de denúncias, orientações para vítimas de violência
                e informações sobre leis e campanhas.
                  </p>
              <p>
                Para pedir ajuda à nossa associação e acessar nossos serviços com
                profissionais especializados como psicólogos e advogados,
                fale conosco através do link abaixo:
              </p>
            </div>

            <div>
            <Btn text="PEÇA AJUDA" target="https://api.whatsapp.com/send?phone=5517988313178" color="white" fontColor="var(--red)" icon="fa fa-whatsapp" />
            </div>
            
          </div>

          <div className={styles.svgContainer}>
            <GroupFooter />
          </div>
        </div>

        <div className={styles.footerLinks}>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

      </article>
    </footer>
  )
}

export default Footer