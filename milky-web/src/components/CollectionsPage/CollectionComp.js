import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "../Title/Title";
import Photo from "../../assets/img/Photo.png";

const CollectionComp = (props) => {
  const { item } = props;

  return (
    // <div
    //   style={{
    //     width: "592px",
    //     height: "552px",
    //     // marginLeft: "%12.8",
    //     // marginRight: "%12.8",
    //     borderRadius: 25,
    //     backgroundImage: `url(Photo.png)`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //   }}
    // >
    <Grid
      container
      sm={6}
      xs={12}
      sx={{
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "no-repeat",
        borderRadius: "50px 50px 50px 50px",
        // backgroundPosition: "center",
        display: "flex",
        width: "400px",
        height: "550px",
      }}
      direction='column'
      justifyContent='flex-end'
      alignItems='flex-start'
    >
      <Grid item>
        <Typography
          sx={{
            fontSize: "48px",
            fontFamily: "santral",
            color: "white",
            ml: "32px",
          }}
        >
          Collection name
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "santral",
            color: "white",
            ml: "32px",
          }}
        >
          Artist
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{
            borderRadius: 5,
            backgroundColor: "white",
            color: "#000000",
            fontSize: "16px",
            fontFamily: "recoleta",
            ml: "32px",
          }}
          variant='contained'
        >
          Courtney Henry
        </Button>
      </Grid>
    </Grid>
    // </div>
  );
};

export default CollectionComp;
