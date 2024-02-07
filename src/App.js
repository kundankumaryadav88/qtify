import './App.css';
import Hero from './herosection/Hero';
import Navbar from './navbar/Navbar';
import GridComponents from './contentArea/GridComponents';
import NewAlbum from './contentArea/NewAlbum';
import SongPage from './contentArea/SongPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GridComponents />
      <NewAlbum />
      <SongPage />
    </div>
  );
}

export default App;
