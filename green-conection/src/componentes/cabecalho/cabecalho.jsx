import { Link } from 'react-router-dom';
import style from './cabecalho.module.css'; 

const Cabecalho = () => {
  return (
    <header className={style.Cabecalho}>  
      <img src="/images/logo/miniLogo.png" alt="Logo" className={style.logo} />  
      <Link to="/sobre" className={style.link}>Conheça nossa empresa</Link>
      <input type="text" placeholder="Pesquisar..." className={style.search} />
      <a href="#" className={style.link}>Contatar um produtor</a>
      <img src="/images/icones/perfil.png" alt="Perfil" className={style.perfil} />
    </header>
  );
}

export { Cabecalho };
