import styles from "./Card.module.css";

// interface CardProps {
//   title: string;
//   buttonText: string;
// }

interface CardProps {
  children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className={styles.container}>
      {children}

      {/* 
      
      O QUE PRECISO PARA MONTAR O CARD
      
      <h1 className={styles.titulo}>{title}</h1>
      <Formulario />
      <p className={styles.texto}>Lista ou texto?</p>
      <button className={styles.button}>{buttonText}</button>

      * CONSIGO BOTAR O ARIA LABEL PELO CSS? 
      <div className={styles.imagem} role="img" aria-label="Imagem de sacolas OU DE AVIÃO"></div> */}
    </div>
  );
};

export default Card;
