import "./App.css";

export default function Pergunta() {
  return (
    <div className="container-resposta">
      <p className="resposta-card">
        JSX é uma sintaxe para escrever HTML dentro do JS
      </p>
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
