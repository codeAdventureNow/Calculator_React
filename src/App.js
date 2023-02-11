import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [equalsClicked, setEqualsClicked] = useState(false);

  const operators = ["+", "-", "*", "/"];

  function handleEqualsClicked(e) {
    if (display === "") {
      setDisplay("");
    } else {
      let answer = eval(display);
      setDisplay(answer);

      setEqualsClicked(true);
    }
  }

  const handleNumberClick = (value) => {
    // let value = e.target.dataset.num;
    let thirdtoLastValue = display.toString().charAt(display.length - 2);

    let stringReplaced = display.toString().slice(0, -1);

    if (display === "0") {
      setDisplay("" + value);
    } else if (operators.includes(thirdtoLastValue)) {
      if (display.toString().charAt(display.length - 1) == "0") {
        setDisplay(stringReplaced + value);
      } else {
        setDisplay(display + value);
      }
    } else if (equalsClicked === true) {
      setEqualsClicked(false);
      setDisplay("" + value);
    } else {
      setDisplay(display + value);
    }
  };

  function handleOperatorClicked(operator) {
    let lastValue = display.toString().charAt(display.length - 1);
    let stringReplaced = display.toString().slice(0, -1);

    const isLastValueAnOperator = operators.includes(lastValue);

    if (isLastValueAnOperator) {
      setDisplay(stringReplaced + operator);
    } else {
      setEqualsClicked(false);
      setDisplay(display + operator);
    }
  }

  function handleDecimalClick() {
    let value = ".";
    let lastValue = display.toString().charAt(display.length - 1);
    let stringReplaced = display.toString().slice(0, -1);

    if (lastValue == ".") {
      setDisplay(stringReplaced + value);
    } else if (equalsClicked) {
      setEqualsClicked(false);
      setDisplay("" + value);
    } else {
      setDisplay(display + value);
    }
  }

  function handleClearClicked() {
    setDisplay("0");
    setEqualsClicked(false);
  }

  const firstRow = [9, 8, 7];
  const secondRow = [6, 5, 4];
  const thirdRow = [3, 2, 1];

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" className="calc-display" value={display} disabled />

        <div className="flex">
          <button
            onClick={handleClearClicked}
            type="button"
            className="all-clear margin"
            value="all-clear function"
          >
            C
          </button>
        </div>

        <div className="calc-keys">
          {firstRow.map((number) => (
            <button
              onClick={() => handleNumberClick(number)}
              type="button"
              className="button number"
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handleNumberClick(0)}
            type="button"
            className="button number"
          >
            0
          </button>

          <button
            onClick={() => handleOperatorClicked("/")}
            type="button"
            className="button operator"
          >
            &divide;
          </button>

          <button
            onClick={() => handleOperatorClicked("*")}
            type="button"
            className="button operator"
          >
            &times;
          </button>

          <button
            onClick={() => handleOperatorClicked("-")}
            type="button"
            className="button operator"
          >
            -
          </button>

          <button
            onClick={handleDecimalClick}
            type="button"
            className="button decimal"
          >
            .
          </button>
          <button
            onClick={handleEqualsClicked}
            type="button"
            className="equal-sign"
          >
            =
          </button>
          <button
            onClick={() => handleOperatorClicked("+")}
            type="button"
            className="button operator"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
