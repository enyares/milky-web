import { Avatar, Chip, Grid, Typography } from "@mui/material";
import React from "react";

const AvatarChip = ({ label, title, img }) => {
  return (
    <Grid container direction="column">
      <Typography
        sx={{
          fontFamily: "santral",
          fontStyle: "normal",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "110%",
          color: "rgba(0, 0, 0, 0.4)",
          pl: 3,
          pb: "16px",
        }}
      >
        {title}
      </Typography>
      <Chip
        avatar={
          <Avatar
            sx={{
              width: "48px !important",
              height: "48px !important",
              marginRight: "28px !important",
            }}
            alt="not_found"
            src={img}
          />
        }
        label={label}
        variant="outlined"
        sx={{
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
          borderRadius: "200px",
          width: "260px",
          height: "64px",
          fontFamily: "recoleta",
          fontStyle: "normal",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "17.6px",
          borderColor: "white",
          paddingRight: "28px !important",
        }}
      />
    </Grid>
  );
};

export default AvatarChip;
