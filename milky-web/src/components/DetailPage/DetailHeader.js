import React from "react";
import { Grid, Typography } from "@mui/material";
import WaterBorneText from "../HomePage/WaterBorneText";
import Video1 from '../../assets/videos/1.mp4';
import ReactPlayer from "react-player";

const DetailHeader = () => {
  return (
    <Grid container sx={{ mt: "12%" }}>
      <Grid item sx={{height: '480px',display:'flex',justifyContent: 'center',}}  sm={12}>
        <ReactPlayer url={Video1} width="70%" height="90%" controls />
        </Grid>
    <WaterBorneText color="black" fontSize="56px" lineHeight='75.32px' styleProps={{justifyContent: 'center',alignItems: 'center',}} />
      <Grid item sx={{ px: "25%", pt: "32px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "santral",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: "0em",
            py: 5,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          vitae adipiscing convallis nibh pretium. Vel mus consequat quis sit
          morbi. Pulvinar tellus amet congue quam euismod egestas risus, ut
          consectetur. Urna leo dignissim ullamcorper arcu pharetra, ut libero
          nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ultricies vitae adipiscing convallis nibh pretium.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DetailHeader;
