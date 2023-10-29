import React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import styles from "./../styles/ejem.module.css";
export default function ContProductos() {
  return (
  
      <div className={styles.cont}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <img
                  src="https://m.media-amazon.com/images/I/515Bn01qoRL._AC_UF894,1000_QL80_.jpg"
                  alt="img"
                  width="200px"
                ></img>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <img
                  src="https://m.media-amazon.com/images/I/515Bn01qoRL._AC_UF894,1000_QL80_.jpg"
                  alt="img"
                  width="200px"
                ></img>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <img
                  src="https://m.media-amazon.com/images/I/515Bn01qoRL._AC_UF894,1000_QL80_.jpg"
                  alt="img"
                  width="200px"
                ></img>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <img
                  src="https://m.media-amazon.com/images/I/515Bn01qoRL._AC_UF894,1000_QL80_.jpg"
                  alt="img"
                  width="200px"
                ></img>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        
      </div>
   
  );
}
