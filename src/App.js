import './App.css';
import { useState } from 'react';

function App() {
  const [lionSize, setLionSize] = useState(5);
  const [tigerSize, setTigerSize] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [animalsArray, setAnimalsArray] = useState(['camel', 'monkey']);

  return (
    <div className="App">
      <div className='fight'> 
        <div className='animal'>
          <p style={{ fontSize:(lionSize * 5) }}>🦁</p>  
          <div className='buttons'>
            <button onClick={() => setLionSize(lionSize + 1)}>The Lion is getting ready to charge!</button>
            <button onClick={() => setTigerSize(tigerSize - 1)}>The Lion attacks the Tiger</button>
          </div>
        </div>
        <div className='animal'>
          <p style={{ fontSize:(tigerSize * 5) }}>🐯</p>
          <div className='buttons'>
            <button onClick={() => setTigerSize(tigerSize + 1)}>The Tiger is getting ready to attack!</button>
            <button onClick={() => setLionSize(lionSize - 1)}>The Tiger attacks the Lion</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
