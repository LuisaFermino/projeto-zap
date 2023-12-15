import "./App.css";

export default function EstruturaOpcoes() {
  const qtdPerguntas = [
    {
      pergunta: "Pergunta 1",
    },
    { pergunta: "Pergunta 2" },
    {
      pergunta: "Pergunta 3",
    },
    { pergunta: "Pergunta 4" },
    {
      pergunta: "Pergunta 5",
    },
    { pergunta: "Pergunta 6" },
    {
      pergunta: "Pergunta 7",
    },
    { pergunta: "Pergunta 8" },
  ];

  return qtdPerguntas.map((qtd) => <Opcao pergunta={qtd.pergunta} />);
}

function Opcao(props) {
  const { pergunta } = props;

  return (
    <div className="deck">
      <div className="flashcard">
        <p className="pergunta">{pergunta}</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
    </div>
  );
}
