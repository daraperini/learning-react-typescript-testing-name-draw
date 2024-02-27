import { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import styles from "./Sorteio.module.css";
import imagem from "./imagens/aviao.png";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Quem vai tirar o papelzinho?</h1>
      <form onSubmit={sortear} className={styles.formulario}>
        <select
          className={styles.select}
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          <option value="" disabled selected hidden>
            Selecione o seu nome
          </option>
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <p>Clique em sortear para ver quem é seu amigo secreto!</p>
        <button className={styles.botao}>Sortear</button>
      </form>
      {amigoSecreto && (
        <p className={styles.resultado} role="alert">
          {amigoSecreto}
        </p>
      )}
      <footer className={styles.rodape}>
        <img src={imagem} alt="Um desenho de um avião de papel" />
      </footer>
    </section>
  );
};

export default Sorteio;
