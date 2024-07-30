import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Paintings from './components/Paintings';
import Printmaking from './components/Printmaking';
import Collages from './components/Collages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/art/paintings" element={<Paintings />} />
            <Route path="/art/printmaking" element={<Printmaking />} />
            <Route path="/art/collages" element={<Collages />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
