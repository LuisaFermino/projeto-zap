import { useState } from "react";
import "./App.css";
import Pergunta from "./Pergunta";

export default function EstruturaOpcoes() {
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

  return perguntas.map((pergunta, indice) => (
    <Opcao key={indice} descricao={pergunta} posicao={indice + 1} />
  ));
}

function Opcao({ posicao, descricao }) {
  const [estado, setEstado] = useState(true);

  return <>{estado ? <Frente /> : <Pergunta descricao={descricao} />}</>;
}

function Frente() {
  return (
    <div className="deck">
      <div className="flashcard">
        <p className="pergunta">Pergunta {posicao}</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
    </div>
  );
}
