import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equalsClicked, setEqualsClicked] = useState(false);

  function handleEqualsClicked(e) {
    if (display === '') {
      setDisplay('');
    } else {
      let answer = eval(display);
      setDisplay(answer);

      setEqualsClicked(true);
    }
  }

  function handleNumberClick(e) {
    let value = e.target.dataset.num;
    let thirdtoLastValue = display.toString().charAt(display.length - 2);

    let stringReplaced = display.toString().slice(0, -1);
    if (display === '0') {
      setDisplay('' + value);
    } else if (
      thirdtoLastValue == '+' ||
      thirdtoLastValue == '-' ||
      thirdtoLastValue == '*' ||
      thirdtoLastValue == '/'
    ) {
      if (display.toString().charAt(display.length - 1) == '0') {
        setDisplay(stringReplaced + value);
      } else {
        setDisplay(display + value);
      }
    } else if (equalsClicked === true) {
      setEqualsClicked(false);
      setDisplay('' + value);
    } else {
      setDisplay(display + value);
    }
  }

  function handleOperatorClicked(e) {
    let value = e.target.dataset.num;
    let lastValue = display.toString().charAt(display.length - 1);
    let stringReplaced = display.toString().slice(0, -1);
    if (
      lastValue == '+' ||
      lastValue == '-' ||
      lastValue == '*' ||
      lastValue == '/'
    ) {
      setDisplay(stringReplaced + value);
    } else {
      setEqualsClicked(false);
      setDisplay(display + value);
    }
  }

  function handleDecimalClick(e) {
    let value = e.target.dataset.num;
    let lastValue = display.toString().charAt(display.length - 1);
    let stringReplaced = display.toString().slice(0, -1);

    if (lastValue == '.') {
      setDisplay(stringReplaced + value);
    } else if (equalsClicked === true) {
      setEqualsClicked(false);
      setDisplay('' + value);
    } else {
      setDisplay(display + value);
    }
  }

  function handleClearClicked() {
    setDisplay('0');
    setEqualsClicked(false);
  }

  return (
    <div className='App'>
      <h1>Javascript Calculator</h1>

      <div className='calculator'>
        <input type='text' className='calc-display' value={display} disabled />

        <div className='flex'>
          <button
            onClick={handleClearClicked}
            type='button'
            className='all-clear margin'
            value='all-clear function'
          >
            C
          </button>
        </div>

        <div className='calc-keys'>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='7'
          >
            7
          </button>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='8'
          >
            8
          </button>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='9'
          >
            9
          </button>
          <button
            onClick={handleOperatorClicked}
            type='button'
            className='button operator'
            data-num='/'
          >
            &divide;
          </button>

          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='4'
          >
            4
          </button>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='5'
          >
            5
          </button>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='6'
          >
            6
          </button>
          <button
            onClick={handleOperatorClicked}
            type='button'
            className='button operator'
            data-num='*'
          >
            &times;
          </button>

          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='1'
          >
            1
          </button>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='2'
          >
            2
          </button>
          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='3'
          >
            3
          </button>
          <button
            onClick={handleOperatorClicked}
            type='button'
            className='button operator'
            data-num='-'
          >
            -
          </button>

          <button
            onClick={handleNumberClick}
            type='button'
            className='button number'
            data-num='0'
          >
            0
          </button>
          <button
            onClick={handleDecimalClick}
            type='button'
            className='button decimal'
            data-num='.'
          >
            .
          </button>
          <button
            onClick={handleEqualsClicked}
            type='button'
            className='equal-sign'
            data-num='='
          >
            =
          </button>
          <button
            onClick={handleOperatorClicked}
            type='button'
            className='button operator'
            data-num='+'
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
