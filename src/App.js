import './App.css';
import Hero from './herosection/Hero';
import Navbar from './navbar/Navbar';
import Section from './cardsection/Section';
import Cardview from './cardsection/Cardview';
import CustomCard from './CustomCard';
import GridComponents from './GridComponents';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Section /> */}
      <GridComponents />
    </div>
  );
}

export default App;
