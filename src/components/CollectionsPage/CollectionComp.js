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
import { Link } from "react-router-dom";

const CollectionComp = (props) => {
  const { item, index } = props;

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
      xs={12}
      md={4}
      sm={12}
      sx={{
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "no-repeat",
        borderRadius: "50px 50px 50px 50px",
        display: "flex",
        margin: 2,
        height: "550px",
        pb: "25px",
        "&:hover": {
          opacity: 0.9,
          transform: "scale3d(1.05,1.05,1)",
          transition: "transform 0.35s ease-in-out",
        },
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
            mb: "15px",
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
