import "./App.css";

export default function Deck() {
  return (
    <>
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
          <div className="flashcard">
            <p className="pergunta">Pergunta 1</p>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="rodape-deck">
        <p className="texto-concluidos">0/8 CONCLUÍDOS</p>
      </div>
    </>
  );
}
