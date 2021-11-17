import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';

// pages 
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:userid" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
