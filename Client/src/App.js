
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage/HomePage.tsx';

function App() {
  return (
   
    <Router>
      <main>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
