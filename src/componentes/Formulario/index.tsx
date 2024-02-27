import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";
import styles from './Formulario.module.css';

const Formulario = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionaParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionaParticipante} className={styles.formulario}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
      />
      <button disabled={!nome} className={styles.botao}>Adicionar</button>
      {mensagemDeErro && <p className={styles.erro} role="alert">{mensagemDeErro}</p>}
    </form>
  );
};

export default Formulario;
