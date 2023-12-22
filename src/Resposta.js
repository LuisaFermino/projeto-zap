import "./App.css";

export default function Resposta({ resposta }) {
  return (
    <div className="questoes">
      <div className="container-resposta">
        <p className="resposta-card">{resposta}</p>
        <div className="container-opcoes">
          <div className="opcoes">
            <p className="vermelho texto">Não lembrei!</p>
            <p className="laranja texto">Quase não lembrei!</p>
            <p className="verde texto">Zap!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
