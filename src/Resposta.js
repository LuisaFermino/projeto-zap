import "./App.css";

export default function Resposta({ resposta, setFlashcard }) {
  return (
    <div className="questoes">
      <div className="container-resposta">
        <p className="resposta-card">{resposta}</p>
        <div className="container-opcoes">
          <div className="opcoes">
            <p className="vermelho texto" onClick={() => setFlashcard(0)}>
              Não lembrei!
            </p>
            <p className="laranja texto" onClick={() => setFlashcard(0)}>
              Quase não lembrei!
            </p>
            <p className="verde texto" onClick={() => setFlashcard(0)}>
              Zap!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
