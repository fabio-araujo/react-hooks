import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import {allreducers, initialState, reducer } from '../../store'

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(allreducers, initialState);
  const [number, setNumber] = useState(0);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01"></SectionTitle>
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <input type='number' className="input" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Frodo" })}
          >
            Login
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "add2ToNumber" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "multiplyBy7ToNumber" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "divideBy25Number" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "intNumber" })}
          >
            Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "custonNumber", payload: number })}
          >
            Add Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
