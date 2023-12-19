import "./App.css";

export default function TelaInicial({ setInicio }) {
  return (
    <div className="tela-inicial">
      <div className="container-inicial">
        <div className="container-logo">
          <img src="../img/logo.png" alt="logo" className="logo-grande" />
        </div>
        <p className="titulo">ZapRecall</p>
        <button className="botao-iniciar" onClick={() => setInicio(false)}>
          Iniciar Recall!
        </button>
      </div>
    </div>
  );
}
