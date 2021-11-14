import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';

// pages 
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
    </>
  );
}

export default App;
