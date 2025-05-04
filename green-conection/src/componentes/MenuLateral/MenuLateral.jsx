import { useState } from 'react';
import styles from './MenuLateral.module.css';

const MenuLateral = ({ visivel, aoFechar }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null); // Controla a opção selecionada (cliente ou produtor)

  if (!visivel) return null; // Se o menu não estiver visível, não renderiza nada

  // Função para renderizar o formulário de acordo com a opção
  const renderCadastro = () => {
    if (opcaoSelecionada === 'cliente') {
      return (
        <div className={styles.cadastro}>
          <div className={styles.headerCadastro}>
            <div className={styles.icone}></div>
            <h2>Cliente</h2>
          </div>
          <form>
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Digite seu nome" />
            </div>
            <div>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="Digite seu CPF" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" placeholder="Digite seu telefone" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Digite seu email" />
            </div>
            <button type="submit">Cadastrar Cliente</button>
          </form>
        </div>
      );
    } else if (opcaoSelecionada === 'produtor') {
      return (
        <div>
          <h2>Cadastro de Produtor</h2>
          <form>
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Digite seu nome" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Digite seu email" />
            </div>
            <div>
              <label htmlFor="produto">Produto</label>
              <input type="text" id="produto" placeholder="Produto que você vende" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Digite sua senha" />
            </div>
            <button type="submit">Cadastrar Produtor</button>
          </form>
        </div>
      );
    }
  };

  return (
    <div className={styles.menu}>
      <button onClick={aoFechar} className={styles.fechar}>×</button>
      {opcaoSelecionada === null && (
        <div>
          <button onClick={() => setOpcaoSelecionada('cliente')} className={styles.botao}>
            Como Cliente
          </button>
          <button onClick={() => setOpcaoSelecionada('produtor')} className={styles.botao}>
            Como Produtor
          </button>
        </div>
      )}
      {renderCadastro()} {/* Exibe o formulário com base na opção selecionada */}
    </div>
  );
};

export { MenuLateral };
