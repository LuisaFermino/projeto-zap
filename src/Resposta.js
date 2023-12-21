import "./App.css";

export default function Resposta() {
  return (
    <div className="container-resposta">
      <p className="resposta-card"></p>
      <div className="container-opcoes">
        <div className="opcoes">
          <p className="vermelho texto">Não lembrei!</p>
          <p className="laranja texto">Quase não lembrei!</p>
          <p className="verde texto">Zap!</p>
        </div>
      </div>
    </div>
  );
}
