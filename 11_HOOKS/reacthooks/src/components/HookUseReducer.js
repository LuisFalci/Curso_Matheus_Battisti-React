import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  }, 1);

  return (
    <div>
      <h2>useReducer</h2>

      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>
    </div>
  );
};

export default HookUseReducer;
