import { Cabecalho } from "../componentes";
import { Rodape } from "../componentes/rodape";
import styles from "./ContatarProdutor.module.css";

const ContatarProdutor = () => {
  const produtores = [
    "Fazenda Pereira",
    "Fazenda São José",
    "Sítio São Miguel",
    "Rancho Martinez",
    "Sítio Rosa Vermelha",
    "Sítio Irmãos Neto",
    "Rancho Ganzarolli",
  ];

  const produtorSelecionado = "Rancho Ganzarolli";

  return (
    <div className={styles.container}>
      <Cabecalho />

      <div className={styles.conteudo}>
        <div>
          <h1 className={styles.titulo}>Contatar um Produtor</h1>
        </div>

        <div className={styles.corpo}>
          <div className={styles.listaProdutores}>
            <h2 className={styles.subtitulo}>Produtores</h2>
            <ul className={styles.lista}>
              {produtores.map((produtor) => (
                <li
                  key={produtor}
                  className={`${styles.item} ${
                    produtor === produtorSelecionado ? styles.selecionado : ""
                  }`}
                >
                  {produtor}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.formulario}>
            <h2 className={styles.subtitulo}>Formulário</h2>
            <div className={styles.tagSelecionado}>{produtorSelecionado}</div>

            <label className={styles.label}>Assunto:</label>
            <input type="text" className={styles.input} />

            <textarea
              rows="6"
              className={styles.textarea}
              placeholder="Escreva sua mensagem..."
            ></textarea>

            <button className={styles.botao}>Enviar</button>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
};

export { ContatarProdutor };
