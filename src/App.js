import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Nav from './components/navbar/Nav';
import Country from './components/country/Country';
import Europe from './components/country/europe/Europe';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Europe />} />
        <Route path="/europe" element={<Home />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
