import "./App.css";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";

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
        <div className="deck">
          <Pergunta />
        </div>
        <div className="deck">
          <Resposta />
        </div>
        <div className="deck">
          <div className="flashcard">
            <p className="pergunta">Pergunta </p>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="rodape-deck">
        <p className="texto-concluidos">0/8 CONCLUÍDOS</p>
      </div>
    </div>
  );
}
