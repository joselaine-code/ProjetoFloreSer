import styles from "../../styles/pages/home/AccordionHome.module.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function AccordionHome() {
  return (
    <div className={styles.bodyContent}>
      <div className={styles.container}>
        <h2>Conheça os tipos de violência doméstica</h2>

        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionBtn}>
                Física
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordionPanel}>
              <div className={styles.violenceTypeContent}>
                <p>
                  A violência física, entendida como qualquer conduta que ofenda
                  sua integridade ou saúde corporal.
                </p>
                <h4>Exemplos</h4>
                <ul>
                  <li>CHUTES</li>
                  <li>EMPURRÕES</li>
                  <li>SOCOS</li>
                  <li>TORTURA</li>
                  <li>QUALQUER TIPO DE LESÃO FÍSICA</li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionBtn}>
                Psicológica
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordionPanel}>
              <div className={styles.violenceTypeContent}>
                <p>
                  A violência psicológica, entendida como qualquer conduta que
                  lhe cause dano emocional e diminuição da autoestima ou que lhe
                  prejudique e perturbe o pleno desenvolvimento ou que vise
                  degradar ou controlar suas ações, comportamentos, crenças e
                  decisões.
                </p>
                <h4>Exemplos</h4>
                <ul>
                  <li>AMEAÇA</li>
                  <li>CONSTRANGIMENTO</li>
                  <li>HUMILHAÇÃO</li>
                  <li>MANIPULAÇÃO</li>
                  <li>ISOLAMENTO,</li>
                  <li>VIGILÂNCIA CONSTANTE</li>
                  <li>INSULTO</li>
                  <li>CHANTAGEM</li>
                  <li>LIMITAÇÃO DO DIREITO DE IR E VIR</li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionBtn}>
                Patrimonial
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordionPanel}>
              <div className={styles.violenceTypeContent}>
                <p>
                  A violência patrimonial, entendida como qualquer conduta que
                  configure retenção, subtração, destruição parcial ou total de
                  seus objetos, instrumentos de trabalho, documentos pessoais,
                  bens, valores e direitos ou recursos econômicos, incluindo os
                  destinados a satisfazer suas necessidades.
                </p>
                <h4>Exemplos</h4>
                <ul>
                  <li>CONTROLAR O DINHEIRO</li>
                  <li>RETER DOCUMENTOS</li>
                  <li>DESTRUIÇÃO DE OBJETOS PESSOAIS</li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionBtn}>
                Moral
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordionPanel}>
              <div className={styles.violenceTypeContent}>
                <p>
                  A violência moral, entendida como qualquer conduta que
                  configure calúnia, difamação ou injúria.
                </p>
                <h4>Exemplos</h4>
                <ul>
                  <li>ACUSAÇÃO DE TRAIÇÃO</li>
                  <li>CRÍTICAS MENTIOSAS</li>
                  <li>EXPOR A VIDA ÍNTIMA DA VÍTIMA</li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionBtn}>
                Sexual
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordionPanel}>
              <div className={styles.violenceTypeContent}>
                <p>
                  Entendida como qualquer conduta que a constranja a presenciar,
                  a manter ou a participar de relação sexual não desejada,
                  mediante intimidação, ameaça, coação ou uso da força.
                </p>
                <h4>Exemplos</h4>
                <ul>
                  <li>PRATICAR ATOS SEXUAIS QUE CAUSEM REPULSA A VÍTIMA</li>
                  <li>
                    IMPEDIR OU OBRIGAR A UTILIZAÇÃO DE MÉTODOS CONTRACEPTIVOS
                  </li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
