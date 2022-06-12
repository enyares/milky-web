import { Grid, Typography } from "@mui/material";
import React from "react";

const TextComp = () => {
  return (
    <>
      <Grid container direction='column' sx={{ px: "12.8%", mb: "10%" }}>
        <Grid item sm={12} xs={12}>
          <Typography sx={{ fontSize: "40px", fontFamily: "santral" }}>
            We are a value generative company about NFT art and connect our
            collectors with reknown and inspiring artists through carefully
            curated <strong>NFT</strong> projects.
          </Typography>
        </Grid>
        <Grid item container sm={12} xs={12} spacing={5}>
          <Grid item sm={6} xs={12}>
            <Typography sx={{ fontSize: "24px", fontFamily: "santral" }}>
              We collabrate with artists and creators to produce curated
              collections that engage audiences and explore the emerging
              possibilities of blackchain technology for artistics practice
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography sx={{ fontSize: "24px", fontFamily: "santral" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              vitae adipiscing convallis nibh pretium. Vel mus consequat quis
              sit morbi. Pulvinar tellus amet congue quam euismod egestas risus,
              ut consectetur.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TextComp;
