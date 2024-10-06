import './CartaoProduto.css';

export default function CartaoProduto({ produto }) {
    return (
      <div className="cartao-produto">
        <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
        <h3 className="produto-nome">{produto.nome}</h3>
        <p className="produto-descricao">{produto.descricao || "descrição do produto não informada"}</p>
        <p className="produto-preco">{produto.preco}</p>
      </div>
    );
  }