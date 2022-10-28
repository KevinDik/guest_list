import './App.css';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Menu from './components/forms/Menu'
import Evento from './components/pages/Evento'
import Convidados from './components/pages/Convidados'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Evento/>}/>
          <Route path="/convidados" element={<Convidados/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
