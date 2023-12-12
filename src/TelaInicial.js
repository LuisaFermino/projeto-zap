import "./App.css";
import Deck from "./Deck";

export default function TelaInicial() {
  return (
    <div className="tela-inicial">
      <div className="container-inicial">
        <div className="container-logo">
          <img src="../img/logo.png" alt="logo" className="logo-grande" />
        </div>
        <p className="titulo">ZapRecall</p>
        <button className="botao-iniciar">Iniciar Recall!</button>
      </div>
    </div>
  );
}
