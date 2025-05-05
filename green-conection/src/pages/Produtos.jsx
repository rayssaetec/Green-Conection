import React from "react";
import { Link } from "react-router-dom";
import { Rodape } from "../componentes/rodape";
import { Cabecalho } from "../componentes/cabecalho";
import "./Produtos.css";

const produtos = [
  {
    id: 1,
    nome: "Alface Crespa",
    preco: "R$ 6,50 /kg",
    local: "Sítio Irmãos Neto",
    data_producao: "Data de produção: 14/04/2025",
    imagem: "/images/produtos/alface-crespa.jpg",
  },
  {
    id: 2,
    nome: "Tomate",
    preco: "R$ 8,00 /kg",
    local: "Rancho Ganzarolli",
    data_producao: "Data de produção: 10/04/2025",
    imagem: "/images/produtos/tomate.jpg",
  },
  {
    id: 3,
    nome: "Cenoura",
    preco: "R$ 4,80 /kg",
    local: "Sítio Irmãos Neto",
    data_producao: "Data de produção: 06/02/2025",
    imagem: "/images/produtos/cenoura.jpg",
  },
  {
    id: 4,
    nome: "Repolho Roxo",
    preco: "R$ 7,00 /kg",
    local: "Rancho Ganzarolli",
    data_producao: "Data de produção: 24/02/2025",
    imagem: "/images/produtos/repolho-roxo.jpg",
  },
];

export default function Produtos() {
  return (
    <div className="bg-light min-vh-100">
      <Cabecalho />

      <div className="bg-white py-3 px-4 d-flex flex-wrap gap-2 border-bottom shadow-sm">
        {[
          "Categorias",
          "Pagamento",
          "Frete",
          "Para retirada",
          "Preço",
          "Detalhes",
        ].map((filtro, i) => (
          <div key={i} className="dropdown me-2">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {filtro}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Opção 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opção 2
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {produtos.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 text-white"
                style={{ backgroundColor: "#65A754" }}
              >
                <div className="p-3 d-flex justify-content-center align-items-center">
                  <img
                    src={p.imagem}
                    alt={p.nome}
                    style={{
                      height: "150px",
                      width: "300px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title fw-semibold">{p.nome}</h3>
                  <p className="card-text fw-bold fs-5">{p.preco}</p>
                  <p className="small mb-1 text-white fs-5">{p.local}</p>
                  <p className="small mb-1 text-white fs-5">
                    {p.data_producao}
                  </p>
                  <p className="small text-white fs-6">{p.cidade}</p>
                </div>
                <div className="card-footer text-center bg-transparent border-0">
                  <Link
                    to={`/produto/${p.id}`}
                    className="btn btn-outline-light w-100"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
}
