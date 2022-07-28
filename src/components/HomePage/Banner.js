import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactPlayer from "react-player";
import Video1 from '../../assets/videos/2.mp4'

const Banner = (props) => {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          borderRadius: "0px 0px 100px 100px",
          backgroundColor: "#f9f9fa",

          width: "auto",
          height: "100vh",
          px: "6.6%",
        }}
      >
        <Grid item>

          <ReactPlayer url={Video1} width="100%" height="60vh" controls />

          <Typography
            sx={{
              fontFamily: "santral",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            We generate value by connecting collectors with selective artists
            through curated <strong>NFT</strong> collections and build
            empowering art communities.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
