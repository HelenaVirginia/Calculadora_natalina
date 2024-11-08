import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    let res;
    switch (operator) {
      case "+":
        res = Number(num1) + Number(num2);
        break;
      case "-":
        res = Number(num1) - Number(num2);
        break;
      case "*":
        res = Number(num1) * Number(num2);
        break;
      case "/":
        res = num2 !== 0 ? Number(num1) / Number(num2) : "Erro";
        break;
      default:
        res = "Operação inválida";
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Calculadora 🎄</h1>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Primeiro Número"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Segundo Número"
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>
      <div className="result">
        <h2>Resultado: {result !== null ? result : "Nenhum"}</h2>
      </div>
    </div>
  );
};

export default App;