import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Country from './components/country/Country';
import Europe from './components/europe/Europe';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Europe />} />
        <Route path="/home/:country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
