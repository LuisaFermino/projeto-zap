import "./App.css";

export default function TelaInicial() {
  return (
    <div className="tela-inicial">
      <img src="../img/logo.png" alt="logo" className="logo-grande" />
      <p className="titulo">ZapRecall</p>
      <button className="botao-iniciar">Iniciar Recall!</button>
    </div>
  );
}
