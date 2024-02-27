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
    </div>
  );
};

export default Card;
