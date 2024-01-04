import { useState } from "react";
import "./App.css";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";

export default function EstruturaOpcoes({ setValor, valor }) {
  const flashcards = [
    {
      pergunta: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      pergunta: "O React é _",
      resposta: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      pergunta: "Componentes devem iniciar com _",
      resposta: "Letra maiúscula",
    },
    { pergunta: "Podemos colocar _ dentro do JSX ", resposta: "expressões" },
    {
      pergunta: "O ReactDOM nos ajuda _  ",
      resposta: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      pergunta: "Usamos o npm para _",
      resposta: "Gerenciar pacotes necessários e suas dependências",
    },
    {
      pergunta: "Usamos props para _",
      resposta: "Passar diferentes informações para componentes ",
    },
    {
      pergunta: "Usamos estado (state) para _ ",
      resposta:
        "Dizer para o React quais informações devem renderizar a tela novamente",
    },
  ];

  return flashcards.map((flashcard, indice) => (
    <Opcao
      key={indice}
      numeracao={indice + 1}
      pergunta={flashcard.pergunta}
      resposta={flashcard.resposta}
      setValor={setValor}
      valor={valor}
    />
  ));
}

function Opcao({ pergunta, numeracao, resposta, setValor, valor }) {
  const [flashcard, setFlashcard] = useState(0);
  const [status, setStatus] = useState("");

  const cards = {
    0: (
      <Frente
        setFlashcard={setFlashcard}
        numeracao={numeracao}
        status={status}
      />
    ),
    1: <Pergunta setFlashcard={setFlashcard} pergunta={pergunta} />,
    2: (
      <Resposta
        setFlashcard={setFlashcard}
        setStatus={setStatus}
        resposta={resposta}
        setValor={setValor}
        valor={valor}
      />
    ),
  };
  return <>{cards[flashcard]}</>;
}

function Frente({ setFlashcard, numeracao, status }) {
  console.log(status);
  return (
    <div className="deck">
      <div className="flashcard">
        <p className={`pergunta ${status}`}>Pergunta {numeracao}</p>
        <ion-icon
          name="play-outline"
          onClick={() => setFlashcard(1)}
        ></ion-icon>
      </div>
    </div>
  );
}
