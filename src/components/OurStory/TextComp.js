import { Grid, Typography } from "@mui/material";
import React from "react";

const TextComp = () => {
  return (
    <>
      <Grid container direction='column' sx={{ px: "14%", mb: "10%" }}>
        <Grid item sm={12} xs={12}>
          <Typography sx={{ fontSize: "40px", fontFamily: "santral" }}>
            We are a value generation NFT company specialising in arts.
          </Typography>
        </Grid>
        <Grid item container sm={12} xs={12} spacing={5} sx={{ mt: 1 }}>
          <Grid item sm={6} xs={12}>
            <Typography sx={{ fontSize: "24px", fontFamily: "santral" }}>
              We connect collectors with renowned and inspiring artists through
              carefully curated NFT collections with tremendous value generation
              potential.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography sx={{ fontSize: "24px", fontFamily: "santral" }}>
              We collaborate with artists and creators to produce curated
              collections that engage audiences and explore the emerging
              possibilities of blockchain technology for artistic practices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TextComp;
