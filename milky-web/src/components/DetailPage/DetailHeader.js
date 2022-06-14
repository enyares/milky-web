import React from "react";
import { Grid, Typography } from "@mui/material";

const DetailHeader = () => {
  return (
    <Grid container sx={{ mt: "12%" }}>
      <Grid item sx={{ px: "9%" }}>
        <img
          src={require("../../assets/img/WATERBORNE X BY HUSSEIN CHALAYAN.png")}
        />
      </Grid>
      <Grid item sx={{ px: "25%", pt: "32px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "santral",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: "0em",
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
