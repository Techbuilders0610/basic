
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Mahesh from './components/Mahesh';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/"  element={<Navbar/>}/>
          <Route path="/mahesh"  element={<Mahesh/>}/>
        </Routes>
          </div>
  );
}

export default App;
