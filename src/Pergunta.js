import "./App.css";

export default function Pergunta() {
  const perguntas = [
    { descricao: "O que é JSX?" },
    { descricao: "O React é _" },
    { descricao: "Componentes devem iniciar com _" },
    { descricao: "Podemos colocar _ dentro do JSX " },
    { descricao: "O ReactDOM nos ajuda _  " },
    { descricao: "Usamos o npm para _" },
    { descricao: "Usamos props para _" },
    { descricao: "Usamos estado (state) para _ " },
  ];

  return perguntas.map((pergunta) => (
    <EstruturaPergunta descricao={pergunta.descricao} />
  ));
}

function EstruturaPergunta(props) {
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
