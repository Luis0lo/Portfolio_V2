
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './sections/About/About';
import Home from './sections/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
