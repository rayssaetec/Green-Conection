import logo from '../../img/logo/miniLogo.png';
import style from './cabecalho.module.css'; 

const Cabecalho = () => {
  return (
    <header className={style.Cabecalho}>  {/* Usando a classe do módulo CSS */}
      <img src={logo} alt="Logo" className={style.logo} />  {/* Usando o módulo CSS para a logo */}
      <a href="/outra-pagina" className={style.link}>Outra Página</a>
      <input type="text" placeholder="Pesquisar..." className={style.search} />
      <a href="#" className={style.link}>Sem Destino</a>
      <img src={perfilIcon} alt="Perfil" className={style.perfil} />
    </header>
  );
}

export { Cabecalho };
