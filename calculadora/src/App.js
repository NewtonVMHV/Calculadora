import './App.css';
import Keyboard from './Components/Keyboard'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) =>{
    setInput(input+value);
  };

  const handleEqual = () => {
    // eslint-disable-next-line no-eval
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
  };

  return(
    <div className='App'>
      <div className='calculator'>
        <input className='display' type='text' value={input} readOnly/>
        <Keyboard
          handleClear={handleClear}
          handleEqual={handleEqual}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
