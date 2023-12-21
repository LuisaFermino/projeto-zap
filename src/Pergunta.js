import "./App.css";

export default function Pergunta({ pergunta }) {
  return (
    <div className="questoes">
      <div className="container-pergunta">
        <p className="pergunta-card">{pergunta}</p>
        <div className="virar-pergunta">
          <img src="../img/setinha.png" alt="virar" className="seta-virar" />
        </div>
      </div>
    </div>
  );
}
