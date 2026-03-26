
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Bala Baiana", available: true },
    { name: "Pavê de Oreo", available: false },
    { name: "Mousse de Maracujá com Chocolate", available: false },
    { name: "Pavê de Morango", available: false },
    { name: "Doce de Paçoca", available: false },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const finalizarPedido = () => {
    const mensagem = `Olá, quero pedir:

${cart.map(item => "- " + item).join("\n")}

Pagamento: Pix ou Dinheiro`;

    window.open(`https://wa.me/5517996028699?text=${encodeURIComponent(mensagem)}`);
  };

  return (
    <div style={{ backgroundColor: "#5a1f1f", color: "#f5e6d3", minHeight: "100vh", padding: "20px" }}>
      <h1>Doces Oliveira</h1>

      <h2>Cardápio</h2>
      {products.map((p, index) => (
        <div key={index} style={{ border: "1px solid #f5e6d3", marginBottom: "10px", padding: "10px" }}>
          <h3>{p.name}</h3>
          <p>{p.available ? "Disponível" : "Indisponível no momento"}</p>
          {p.available && (
            <button onClick={() => addToCart(p.name)}>
              Adicionar
            </button>
          )}
        </div>
      ))}

      <h2>Carrinho</h2>
      {cart.map((item, i) => (
        <p key={i}>{item}</p>
      ))}

      <button onClick={finalizarPedido}>
        Finalizar Pedido no WhatsApp
      </button>

      <p style={{ marginTop: "20px" }}>
        Pagamento via Pix: rosineteoliveira280@gmail.com
      </p>
    </div>
  );
}