import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Offers from './components/Offers';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="combined-sections">
          <Hero />
          <Offers />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
