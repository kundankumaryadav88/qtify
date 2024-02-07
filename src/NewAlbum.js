import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CustomCard from "./CustomCard";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import "./App.css";
import CarouselSec from "./CarouselSec";


function NewAlbum() {
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
  
    useEffect(() => {
      axios
        .get("https://qtify-backend-labs.crio.do/albums/new")
        .then((response) => {
          setAlbums(response.data);
        })
        .catch((error) => {
          console.error("Error fetching albums:", error);
        });
    }, []);
  console.log(albums);
    return (
      <div style={{backgroundColor: "black"}}>
          <div
            style={{
                padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            //   backgroundColor: "black",
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
              New Albums
            </p>
            <p
              style={{ color: "rgb(52, 201, 75)", cursor: "pointer" }}
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ?   "Collapse":"Show All"}
            </p>
          </div>
  
          {!collapsed ? (
            <div style={{width: "100%", backgroundColor: "black" , display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CarouselSec albums={albums} />
            </div>
          ) : (
            <Grid
              container
            spacing={1}
            style={{ paddingLeft:"20px"}}
            >
              {albums.map((album) => (
                <Grid
                  item
                  key={album.id}
                >
                  <CustomCard key={album.id} children={album} />
                </Grid>
              ))}
            </Grid>
          )}
      </div>
    );
  }
  

export default NewAlbum;
