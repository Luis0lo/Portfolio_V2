
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
