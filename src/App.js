import { useState } from "react";
import "./App.css";
import TelaInicial from "./TelaInicial";
import Deck from "./Deck";

function App() {
  const [inicio, setInicio] = useState(true);
  return (
    <div className="App">
      {inicio ? <TelaInicial setInicio={setInicio} /> : <Deck />}
    </div>
  );
}

export default App;
