import React from 'react';
import { Cabecalho } from '../componentes/cabecalho'; // <-- correto para sua escolha

const produtos = [
  {
    nome: "Alface Crespa",
    preco: "R$ 6,50 /kg",
    local: "Fazenda Ferreira",
    cidade: "São João",
    imagem: "/img/alface-crespa.jpg",
  },
  {
    nome: "Tomate",
    preco: "R$ 8,00 /kg",
    local: "Fazenda São Pedro",
    cidade: "São Miguel",
    imagem: "/img/tomate.jpg",
  },
  {
    nome: "Cenoura",
    preco: "R$ 4,80 /kg",
    local: "Sítio Verde",
    cidade: "Campinas",
    imagem: "/img/cenoura.jpg",
  },
  {
    nome: "Repolho Roxo",
    preco: "R$ 7,00 /kg",
    local: "Fazenda Nova",
    cidade: "Limeira",
    imagem: "/img/repolho-roxo.jpg",
  },
];

export default function Produtos() {
  return (
    <div className="bg-light min-vh-100">
      <Cabecalho />

      <div className="bg-white py-3 px-4 d-flex flex-wrap gap-2 border-bottom shadow-sm">
        {["Categorias", "Pagamento", "Frete", "Para retirada", "Preço", "Detalhes"].map((filtro, i) => (
          <div key={i} className="dropdown me-2">
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
              {filtro}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Opção 1</a></li>
              <li><a className="dropdown-item" href="#">Opção 2</a></li>
            </ul>
          </div>
        ))}
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {produtos.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={p.imagem}
                  alt={p.nome}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.nome}</h5>
                  <p className="card-text fw-bold text-success">{p.preco}</p>
                  <p className="text-muted small mb-1">{p.local}</p>
                  <p className="text-muted small">{p.cidade}</p>
                </div>
                <div className="card-footer text-center bg-white border-0">
                  <button className="btn btn-outline-success w-100">Saiba Mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
