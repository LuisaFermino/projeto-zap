import { useState } from "react";
import "./App.css";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";

export default function EstruturaDeck() {
  const flashcards = [
    {
      pergunta: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      pergunta: "O React é _",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
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
      resposta: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      pergunta: "Usamos props para _",
      resposta: "Passar diferentes informações para componentes ",
    },
    {
      pergunta: "Usamos estado (state) para _ ",
      resposta:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return flashcards.map((indice, descricao, texto) => (
    <Opcao
      key={indice}
      numeracao={indice + 1}
      pergunta={descricao.pergunta}
      resposta={texto.pergunta}
    />
  ));
}

function Opcao({ pergunta, numeracao }) {
  const [flashcard, setFlashcard] = useState(true);
  return (
    <>
      {flashcard ? (
        <Frente setFlashcard={setFlashcard} numeracao={numeracao} />
      ) : (
        <Pergunta pergunta={pergunta} />
      )}
    </>
  );
}

function Frente({ setFlashcard, numeracao }) {
  return (
    <div className="deck">
      <div className="flashcard">
        <p className="pergunta">Pergunta {numeracao}</p>
        <ion-icon
          name="play-outline"
          onClick={() => setFlashcard(false)}
        ></ion-icon>
      </div>
    </div>
  );
}
