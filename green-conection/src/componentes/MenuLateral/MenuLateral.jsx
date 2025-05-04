import styles from './MenuLateral.module.css';

const MenuLateral = ({ visivel, aoFechar }) => {
  if (!visivel) return null;

  return (
    <div className={styles.menu}>
      <button onClick={aoFechar} className={styles.fechar}>×</button>
      <div className={styles.icone}></div>
      <h2>Criar conta</h2>
      <button className={styles.botao}>Como Cliente</button>
      <button className={styles.botao}>Como Produtor</button>
    </div>
  );
};

export { MenuLateral };
