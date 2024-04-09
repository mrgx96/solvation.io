import { useState } from 'react';
import './App.css';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Presale from './sections/Presale';
import Roadmap from './sections/Roadmap';
import Supply from './sections/Supply';
import Modal from './sections/Modal';

function App() {
  const [modal, setModal] = useState(false);
  return (
    <main>
      <Home onOpenModal={() => setModal(true)} />
      <Presale />
      <Supply />
      <Roadmap />
      <Contact />
      <Footer />
      <Modal show={modal} onClose={() => setModal(false)} />
    </main>
  );
}

export default App;
