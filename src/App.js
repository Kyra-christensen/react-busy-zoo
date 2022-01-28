import './App.css';
import { useState } from 'react';
import AnimalList from './AnimalList';
import Sign from './Sign';

function App() {
  const [lionSize, setLionSize] = useState(5);
  const [tigerSize, setTigerSize] = useState(5);
  const [isOpen, setIsOpen] = useState(true);
  const [animalsArray, setAnimalsArray] = useState(['camel', 'zebra']);

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
      <Sign isOpen={isOpen} />
      <div className='buttons'>
        <button onClick={() => setIsOpen(true)}>Open</button>
        <button onClick={() => setIsOpen(false)}>Closed</button>
      </div>
      <AnimalList animals={animalsArray} />
      <div className='buttons'>
        <button onClick={() => setAnimalsArray([...animalsArray, 'camel'])}>Camel</button>
        <button onClick={() => setAnimalsArray([...animalsArray, 'zebra'])}>Zebra</button>
        <button onClick={() => setAnimalsArray([...animalsArray, 'giraffe'])}>Giraffe</button>
        <button onClick={() => setAnimalsArray([...animalsArray, 'elephant'])}>Elephant</button>
      </div>
    </div>
  );
}

export default App;
