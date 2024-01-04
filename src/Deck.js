import { useState } from "react";
import "./App.css";
import EstruturaOpcoes from "./EstruturaOpcoes";

export default function Deck() {
  const [valor, setValor] = useState(0);

  return (
    <div className="container">
      <div className="logo-deck">
        <img
          src="../img/logo-pequeno.png"
          alt="logo"
          className="logo-pequeno"
        />
        <p className="titulo-deck">ZapRecall</p>
      </div>
      <div className="container-deck">
        <EstruturaOpcoes setValor={setValor} valor={valor} />
      </div>

      <div className="rodape-deck">
        <div>
          <p className="mensagem-final">Parabéns!</p>
          <p className="resultado">Você não esqueceu de nenhum flashcard!</p>
        </div>
        <p className="texto-concluidos">{valor}/8 CONCLUÍDOS</p>
      </div>
    </div>
  );
}
