import { useNavigate } from 'react-router-dom';
import styles from './Botao.module.css';

const Botao = ({ texto, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  return (
    <button className={styles.Botao} onClick={handleClick}>
      {texto}
    </button>
  );
};

export { Botao };
