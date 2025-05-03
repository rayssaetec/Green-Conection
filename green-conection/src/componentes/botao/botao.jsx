import styles from './Botao.module.css';  

const Botao = ({ texto, scrollToSection }) => {
  return (
    <button 
      className={styles.Botao} 
      onClick={() => scrollToSection()}
    >
      {texto}
    </button>
  );
};

export { Botao };