import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function McCards({ item }) {
  return (
    <Card className='mb-3 mt-20' sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component='img'
          height='140'
          image='https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png'
          alt='Minecraft Item'
        />
        <CardContent>
          <>
            {item.name &&
            item.durability &&
            item.minecraft_id_name &&
            item.stackable ? (
              <>
                <Typography gutterBottom variant='h5' component='div'>
                  Name: {item.name}
                  <br/>
                  {item.durability && (
                    <span>Durability: {item.durability}</span>
                  )}
                  <br/>
                  {item.stackable && <span>Stackable: {item.stackable}</span>}
                </Typography>
                <Typography variant='body3' color='text.secondary'>{item.name}</Typography>
              </>
            ) : null}
          </>
        </CardContent>
    </Card>
  );
}

export default McCards;

