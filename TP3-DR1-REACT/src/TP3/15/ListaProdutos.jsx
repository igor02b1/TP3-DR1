import CartaoProduto from './CartaoProduto.jsx';

export default function ListaProdutos() {
    const produtos = [ 
        {
          nome: "Tênis de Corrida", 
          descricao: "Tênis confortável para corridas diárias.", 
          preco: "R$ 299,90", 
          imagem: "https://via.placeholder.com/150" 
        },
        { 
          nome: "Camisa de Ciclismo", 
          descricao: "", 
          preco: "R$ 129,90", 
          imagem: "https://via.placeholder.com/150" 
        }, 
        { 
          nome: "Boné Esportivo", 
          descricao: "Boné com proteção solar.", 
          preco: "R$ 59,90", 
          imagem: "https://via.placeholder.com/150" 
        }
      ];

    return (
      <div className="lista-produtos">
        {produtos.map((produto, index) => (
          <CartaoProduto key={index} produto={produto} />
        ))}
      </div>
    );
}