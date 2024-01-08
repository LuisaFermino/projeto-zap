import { useState } from "react";
import "./App.css";
import EstruturaOpcoes from "./EstruturaOpcoes";

export default function Deck({ setInicio }) {
  const [valor, setValor] = useState(0);
  const [erro, setErro] = useState(0);
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
        <EstruturaOpcoes
          setValor={setValor}
          valor={valor}
          setErro={setErro}
          erro={erro}
        />
      </div>

      <div className="rodape-deck">
        {valor === 8 && erro < 1 ? (
          <div className="container-resultados">
            <div className="mensagem-parabens">
              <p className="mensagem-final">🥳 Parabéns!</p>
              <p className="resultado">
                Você não esqueceu de nenhum flashcard!
              </p>
              <p className="texto-concluidos">{valor}/8 CONCLUÍDOS</p>
              <button className="reiniciar" onClick={() => setInicio(true)}>
                REINICIAR RECALL
              </button>
            </div>
          </div>
        ) : valor === 8 && erro >= 1 ? (
          <div className="container-resultados">
            <div className="mensagem-parabens">
              <p className="mensagem-final">😥 Putz...</p>
              <p className="resultado">
                Ainda faltam alguns... Mas não desanime!
              </p>
              <p className="texto-concluidos">{valor}/8 CONCLUÍDOS</p>
              <button className="reiniciar" onClick={() => setInicio(true)}>
                REINICIAR RECALL
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <p className="concluidos">{valor}/8 CONCLUÍDOS</p>
      </div>
    </div>
  );
}
