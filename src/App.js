import './App.css';
import Hero from './herosection/Hero';
import Navbar from './navbar/Navbar';
import GridComponents from './GridComponents';
import NewAlbum from './NewAlbum';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GridComponents />
      <NewAlbum />
    </div>
  );
}

export default App;
