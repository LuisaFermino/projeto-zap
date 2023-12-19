import "./App.css";
import EstruturaOpcoes from "./EstruturaOpcoes";

export default function Deck() {
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
        <EstruturaOpcoes />
      </div>
      {/* <div className="respostas">
        <div className="container">
          <Resposta />
        </div>
      </div> */}

      <div className="rodape-deck">
        <p className="texto-concluidos">0/8 CONCLUÍDOS</p>
      </div>
    </div>
  );
}
