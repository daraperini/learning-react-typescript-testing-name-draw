import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import styles from './ListaParticipantes.module.css';

const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul className={styles.lista}>
      {participantes.map((participante) => (
        <li key={participante} >{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
