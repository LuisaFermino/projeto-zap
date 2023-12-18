import "./App.css";

export default function Resposta() {
  const respostas = [
    { descricao: "Uma extensão de linguagem do JavaScript" },
    { descricao: "uma biblioteca JavaScript para construção de interfaces" },
    { descricao: "Letra maiúscula" },
    { descricao: "expressões" },
    {
      descricao:
        "Interagindo com a DOM para colocar componentes React na mesma",
    },
    { descricao: "Gerenciar os pacotes necessários e suas dependências" },
    { descricao: "Passar diferentes informações para componentes " },
    {
      descricao:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return respostas.map((resposta) => (
    <EstruturaResposta descricao={resposta.descricao} />
  ));
}

function EstruturaResposta(props) {
  const { descricao } = props;

  return (
    <div className="container-resposta">
      <p className="resposta-card">{descricao}</p>
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
