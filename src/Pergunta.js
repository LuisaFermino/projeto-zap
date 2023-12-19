import "./App.css";

export default function Pergunta() {
  const { descricao } = props;

  return (
    <div className="container-pergunta">
      <p className="pergunta-card">{descricao}</p>

      <div className="virar-pergunta">
        <img src="../img/setinha.png" alt="virar" className="seta-virar" />
      </div>
    </div>
  );
}

function EstruturaPergunta(props) {}
