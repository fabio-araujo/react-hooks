import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(n) {
  if (n === "") return 1;
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [numberParImpar, setNumberParImpar] = useState(0);
  const [parImpar, setParImpar] = useState("Par");
  useEffect(
    function() {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function() {
      if (fatorial > 1000000) {
        document.title = "Eita!!!!";
      }
    },
    [fatorial]
  );

  useEffect(
    function() {
      if (numberParImpar % 2 === 0) {
        setParImpar("Par")
      } else {
        setParImpar("Impar")
      }
    },
    [numberParImpar]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
      <SectionTitle title="Exercício #02"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{parImpar}</span>
        </div>
        <input
          type="number"
          className="input"
          value={numberParImpar}
          onChange={(e) => setNumberParImpar(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default UseEffect;
