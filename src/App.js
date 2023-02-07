import './App.css';
import { useState } from 'react';

function App() {
  const [leftOperand, setLeftOperand] = useState(0);
  const [rightOperand, setRightOperand] = useState(0);
  const [operator, setOperator] = useState();
  const [operatorClicked, setOperatorClicked] = useState(false);

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

  return (
    <div className='App'>
      <h1>Javascript Calculator</h1>

      <div className='calculator'>
        <input
          type='text'
          className='calc-display'
          value={
            !operatorClicked
              ? leftOperand
              : leftOperand + operator + rightOperand
          }
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
              operatorClicked ? handleLeftOperandClick : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='7'
          >
            7
          </button>
          <button
            onClick={
              operatorClicked ? handleLeftOperandClick : handleRightOperandClick
            }
            type='button'
            className='button number'
            data-num='8'
          >
            8
          </button>
          <button type='button' className='button number' data-num='9'>
            9
          </button>
          <button type='button' className='button operator' data-num='/'>
            &divide;
          </button>

          <button type='button' className='button number' data-num='4'>
            4
          </button>
          <button type='button' className='button number' data-num='5'>
            5
          </button>
          <button type='button' className='button number' data-num='6'>
            6
          </button>
          <button type='button' className='button operator' data-num='*'>
            &times;
          </button>

          <button type='button' className='button number' data-num='1'>
            1
          </button>
          <button type='button' className='button number' data-num='2'>
            2
          </button>
          <button type='button' className='button number' data-num='3'>
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

          <button type='button' className='button number' data-num='0'>
            0
          </button>
          <button type='button' className='button decimal' data-num='.'>
            .
          </button>
          <button type='button' className='equal-sign' data-num='='>
            =
          </button>
          <button type='button' className='button operator' data-num='+'>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
