import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Country from './components/country/Country';
import Europe from './components/europe/Europe';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Europe />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
