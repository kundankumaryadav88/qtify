import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { TabContext, TabPanel } from "@mui/lab";
import CarouselSec from "./CarouselSec";

function SongPage() {
  const [songsByGenre, setSongsByGenre] = useState({
    all: [],
    rock: [],
    pop: [],
    jazz: [],
    blues: [],
  });
  const [value, setValue] = useState(0);

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllSongs = async () => {
      const data = await fetchData("https://qtify-backend-labs.crio.do/songs");
      if (data) {
        const songsGroupedByGenre = {
          all: data,
          rock: [],
          pop: [],
          jazz: [],
          blues: [],
        };
        data.forEach((song) => {
          songsGroupedByGenre[song.genre.key].push(song);
        });
        setSongsByGenre(songsGroupedByGenre);
      }
    };
    fetchAllSongs();
  }, []);

  const handleChangeSongs = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabPanels = () => {
    return Object.entries(songsByGenre).map(([genre, songs], index) => (
      <TabPanel key={index} value={index}>
        <div
          style={{
            width: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarouselSec albums={songs} />
        </div>
      </TabPanel>
    ));
  };

  return (
    <div>
      <div className="songs" style={{ backgroundColor: "black" }}>
        <p
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "20px",
            // lineHeight: "30px",
            paddingLeft: "20px",
            textAlign: "left",
          }}
        >
          Songs
        </p>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChangeSongs}
            indicatorColor="secondary"
            aria-label="icon label tabs example"
            sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: 'rgb(52,201,75)', 
                },
              }}
          >
            {Object.keys(songsByGenre).map((genre, index) => (
              <Tab
                key={index}
                label={genre}
                value={index}
                style={{ color: "white", textTransform: "capitalize" }}
              />
            ))}
          </Tabs>
          {renderTabPanels()}
        </TabContext>
      </div>
    </div>
  );
}

export default SongPage;
