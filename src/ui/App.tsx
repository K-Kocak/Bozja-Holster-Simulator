import '@css/App.scss';

import BozjaHolsterSimulator from './components/BozjaHolsterSimulator';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/sim/*' element={<BozjaHolsterSimulator/>}></Route>
          <Route path='' element={<Navigate to="/sim/" replace />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
