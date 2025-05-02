import logo from '../../img/logo/miniLogo.png';
import perfilIcon from '../../img/icones/perfil.png';
import style from './cabecalho.module.css'; 

const Cabecalho = () => {
  return (
    <header className={style.Cabecalho}>  
      <img src={logo} alt="Logo" className={style.logo} />  
      <a href="/outra-pagina" className={style.link}>Conheça nossa empresa</a>
      <input type="text" placeholder="Pesquisar..." className={style.search} />
      <a href="#" className={style.link}>Contatar um produtor</a>
      <img src={perfilIcon} alt="Perfil" className={style.perfil} />
    </header>
  );
}

export { Cabecalho };
