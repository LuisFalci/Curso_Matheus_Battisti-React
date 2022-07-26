// USEREF PODE SER USADO COMO O USESTATE PARA GERERENCIAR VALORES. A DIFERENÇA É QUE ELE É UM OBJETO E SEU VALOR ESTÁ NA PROPRIEDADE CURRENT. UMA PARTICULARIDADE É QUE ELE NÃO RE-RENDERIZA O COMPONENTE AO SER ALTERANDO (USESTATE RE-RENDERIZA).

import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  // 1 - UseRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  //   Neste use effect, com o useState, haveria um loop infinito. Já com o useRef isso não ocorre
  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  //  2 - useRef e dom
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      {/* 1 - useRef */}
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>

      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
