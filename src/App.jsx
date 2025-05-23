import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Offers from './components/Offers';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="combined-sections">
          <Offers />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
