
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage/HomePage.tsx';
import AboutPage from './pages/HomePage/AboutPage.jsx';
import ContactPage from './pages/HomePage/ContactPage.jsx';

function App() {
  return (
   
    <Router>
      <main>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Hakkımızda" element={<AboutPage/>} />
           <Route path="/Iletişim" element={<ContactPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
