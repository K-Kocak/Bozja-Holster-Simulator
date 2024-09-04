import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Counter } from '../backend/counter'

import LostActions from '@backend/lostactions/ActionData';

import divToPlace from '../backend/lostactions/LostActionDescriptionGrinder';

import LostFindsCache from '@ui/components/LostFindsCache';
import LostFindsHolster from '@ui/components/LostFindsHolster';



function App() {
  const [count, setCount] = useState(0)

  function IncrementCounter() : void {
    setCount((count) => count + 5);
  }

  return (
    <>
      <LostFindsCache />
      <LostFindsHolster />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={LostActions.ItemRelated.DynamisDice.img} style={{ maxHeight: 40}}/>
          
        </a>
        
        {divToPlace}
        
      </div>
      <Counter />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={IncrementCounter}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
