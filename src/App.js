import './App.css';
import { useState } from 'react';

function App() {
  const [leftOperand, setLeftOperand] = useState(0);
  const [rightOperand, setRightOperand] = useState(0);
  const [operator, setOperator] = useState();
  const [operatorClicked, setOperatorClicked] = useState(false);
  const [equalsClicked, setEqualsClicked] = useState(false);
  // const [display, setDisplay] = useState()

  function handleLeftOperandClick(event) {
    let value = event.target.dataset.num;

    if (leftOperand == '0') {
      setLeftOperand(value);
    } else {
      setLeftOperand(leftOperand + value);
    }
  }

  function handleRightOperandClick(event) {
    let value = event.target.dataset.num;
    console.log(value);

    if (rightOperand == '0') {
      setRightOperand(value);
    } else {
      setRightOperand(rightOperand + value);
    }
  }
  // console.log(typeof leftOperand);

  function handleOperatorClicked(event) {
    let value = event.target.dataset.num;

    setOperatorClicked(true);
    setOperator(value);
  }

  //JS Version
  function handleEqualsClick(event) {
    console.log(event.target.dataset.num);
    setEqualsClicked(true);
    // let value = event.target.dataset.num;

    //What would be the react version of display.value to target the input?
    //  const display = document.querySelector('.calc-display');
    // if (display.value === '') {
    //   display.value = '';
    // } else {
    //   let answer = eval(display.value);
    //   display.value = answer;
    //   setEqualsClicked(true);

    // }
  }

  return (
    <div className='App'>
      <h1>Javascript Calculator</h1>

      <div className='calculator'>
        <input
          type='text'
          className='calc-display'
          value={`${!equalsClicked && leftOperand}${
            !equalsClicked && operatorClicked ? operator : ''
          }${!equalsClicked && operatorClicked ? rightOperand : ''}${
            equalsClicked ? 'calculate the answer here,clearprior display' : ''
          }`}
          disabled
        />
        <div className='flex'>
          <button
            type='button'
            className='all-clear margin'
            value='all-clear function'
          >
            C
          </button>
        </div>

        <div className='calc-keys'>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='7'
          >
            7
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='8'
          >
            8
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='9'
          >
            9
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button operator'
            data-num='/'
          >
            &divide;
          </button>

          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='4'
          >
            4
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='5'
          >
            5
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='6'
          >
            6
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button operator'
            data-num='*'
          >
            &times;
          </button>

          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='1'
          >
            1
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='2'
          >
            2
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
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
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='0'
          >
            0
          </button>
          <button type='button' className='button decimal' data-num='.'>
            .
          </button>
          <button
            onClick={handleEqualsClick}
            type='button'
            className='equal-sign'
            data-num='='
          >
            =
          </button>
          <button
            onClick={
              !operatorClicked
                ? handleLeftOperandClick
                : handleRightOperandClick
            }
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