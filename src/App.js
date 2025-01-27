import './App.css';
import './assets/styles/media.css';
import Header from './components/Header';
import Section from './components/Section';
import About from './components/About';
import Views from './components/Views';
import Recomendation from './components/Recomendation';
function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <About/>
      <Views/>
      <Recomendation/>
    </div>
  );
}

export default App;
