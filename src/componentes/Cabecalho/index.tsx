import styles from "./Cabecalho.module.css";
import participanteImg from "./imagens/participante.png";

const Cabecalho = () => {
  return (
    <header className={styles.header}>
      <div
        className={styles.imagem__logo}
        role="img"
        aria-label="Logo do Sorteador de Amigo Secreto"
      ></div>
      <img
        className={styles.imagem__participante}
        src={participanteImg}
        alt="Desenho de uma pessoa feliz com um presente na mão"
      />
    </header>
  );
};

export default Cabecalho;
