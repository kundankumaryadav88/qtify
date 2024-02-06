import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CustomCard from "./CustomCard";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import "./App.css";

function Arrow({ disabled, onClick, children }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function GridComponents() {
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
  
    useEffect(() => {
      axios
        .get("https://qtify-backend-labs.crio.do/albums/top")
        .then((response) => {
          setAlbums(response.data);
        })
        .catch((error) => {
          console.error("Error fetching albums:", error);
        });
    }, []);
  
    return (
      <div className="grid-container">
        <Box sx={{ flexGrow: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Top Albums
            </p>
            <p
              style={{ color: "rgb(52, 201, 75)", cursor: "pointer" }}
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? "Show more" : "Collapse"}
            </p>
          </div>
  
          {collapsed ? (
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ width: '100vw' }}>
              {albums.map((album) => (
                <div key={album.id} style={{ marginRight: '10px' }}>
                  <CustomCard children={album} />
                </div>
              ))}
            </ScrollMenu>
          ) : (
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 12, sm: 10, md: 12 }}
            >
              {albums.map((album) => (
                <Grid
                  item
                  key={album.id}
                  className="grid-item"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomCard key={album.id} children={album} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </div>
    );
  }
  

export default GridComponents;
