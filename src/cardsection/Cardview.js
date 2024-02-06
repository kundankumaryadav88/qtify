// Card.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Cardview = ({ album }) => {
  console.log(album);
  return (
    <Card >
    <CardActionArea>
      <CardMedia
        component="img"
        height="20%"
        image={album.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {album.slug}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  );
};

export default Cardview;
