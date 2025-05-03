import { useNavigate } from 'react-router-dom'
import styles from './Botao.module.css';  

const Botao = ({ texto, to }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
  }

  return (
    <button 
      className={styles.Botao} 
      onClick={handleClick}
    >
      {texto}
    </button>
  )
}

export { Botao }