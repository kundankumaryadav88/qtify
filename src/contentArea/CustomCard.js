import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";


function CustomCard({ children }) {
  const label = children.follows ? `${children.follows} follows` : `${children.likes} likes`;
  return (
   <div style={{padding: "10px"}}>

     <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "232px",
        borderRadius: "10px",
      }}
    >
      <CardActionArea style={{ height: "100%" }}>
        <CardMedia
          component="img"
          style={{ height: "80%", width: "100%", objectFit: "cover" }}
          image={children.image}
          alt="green iguana"
        />
        <CardContent
          style={{
            height: "20%",
            paddingTop: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Chip
            label={label}
            style={{ backgroundColor: "black", color: "white" }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
    <Typography variant="body2" style={{ color: "white", margin: "10px", textAlign: "start" }}>{children.title}</Typography>
   </div>
  );
}

export default CustomCard;

