import { Grid, Typography } from "@mui/material";
import React from "react";

const BigTitle = () => {
  return (
    <Grid container sx={{ px: 3, mt: "7%" }}>
      <Typography
        sx={{
          fontFamily: "recoleta",
          fontSize: "180px",
          opacity: 0.2,
          textAlign: "center",
          display: { xs: "none", sm: "flex" },
        }}
      >
        Featured Articles
      </Typography>
      <Typography
        sx={{
          fontFamily: "recoleta",
          fontSize: "90px",
          opacity: 0.2,
          textAlign: "center",
          display: { sm: "none", xs: "flex" },
        }}
      >
        Featured Articles
      </Typography>
    </Grid>
  );
};

export default BigTitle;
