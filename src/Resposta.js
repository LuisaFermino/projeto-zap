import "./App.css";

export default function Resposta({
  resposta,
  setFlashcard,
  setStatus,
  setValor,
  valor,
}) {
  function recebeCores(cor) {
    setFlashcard(0);
    setStatus(cor);
    setValor(valor + 1);
  }

  return (
    <div className="questoes">
      <div className="container-resposta">
        <p className="resposta-card">{resposta}</p>
        <div className="container-opcoes">
          <div className="opcoes">
            <p className="vermelho texto" onClick={() => recebeCores("red")}>
              Não lembrei!
            </p>
            <p className="laranja texto" onClick={() => recebeCores("orange")}>
              Quase não lembrei!
            </p>
            <p className="verde texto" onClick={() => recebeCores("green")}>
              Zap!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
