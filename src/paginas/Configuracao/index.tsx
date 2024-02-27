import Formulario from "../../componentes/Formulario";
import ListaParticipantes from "../../componentes/ListaParticipantes";
import Rodape from "../../componentes/Rodape";
import imagem from "./imagens/sacolas.png";
import styles from "./Configuracao.module.css";

const Configuracao = () => {
  return (
    <>
      <h1 className={styles.titulo}>Vamos começar!</h1>
      <Formulario />
      <ListaParticipantes />
      <div className={styles.container__rodape}>
        <Rodape />
        <img src={imagem} alt="Duas sacolas sobrepostas" />
      </div>
    </>
  );
};

export default Configuracao;
