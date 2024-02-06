// Section.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardview from './Cardview';

const Section = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  return (
    <div className="section">
      <h2>Top Albums</h2>
      <button>Toggle</button>
      <div className="grid">
        {albums.map(album => (
          <Cardview key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Section;
