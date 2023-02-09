import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Country from './components/country/Country';
import Europe from './components/europe/Europe';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Europe />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
