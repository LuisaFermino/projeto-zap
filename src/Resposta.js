import "./App.css";

export default function Resposta({
  resposta,
  setFlashcard,
  setStatus,
  setValor,
  valor,
  setAlteraIcone,
}) {
  function atualizaFlashcard(cor, icone) {
    setFlashcard(0);
    setStatus(cor);
    setValor(valor + 1);
    setAlteraIcone(icone);
  }

  return (
    <div className="questoes">
      <div className="container-resposta">
        <p className="resposta-card">{resposta}</p>
        <div className="container-opcoes">
          <div className="opcoes">
            <p
              className="vermelho texto"
              onClick={() => atualizaFlashcard("red", 1)}
            >
              Não lembrei!
            </p>
            <p
              className="laranja texto"
              onClick={() => atualizaFlashcard("orange", 2)}
            >
              Quase não lembrei!
            </p>
            <p
              className="verde texto"
              onClick={() => atualizaFlashcard("green", 3)}
            >
              Zap!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
