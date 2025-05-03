import { useNavigate } from 'react-router-dom';
import styles from './BotaoGrande.module.css';

const BotaoGrande = ({ texto, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button 
      className={styles.BotaoGrande} 
      onClick={handleClick}
    >
      {texto}
    </button>
  );
};

export { BotaoGrande };
