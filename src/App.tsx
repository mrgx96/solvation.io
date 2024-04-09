import './App.css';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Presale from './sections/Presale';
import Roadmap from './sections/Roadmap';
import Supply from './sections/Supply';

function App() {
  return (
    <main>
      <Home />
      <Presale />
      <Supply />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
