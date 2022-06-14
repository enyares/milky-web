import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import ButtonReal from "../Widget/ButtonReal";

const BigCard = () => {
  return (
    <Grid
      sx={{
        width: "auto",
        height: "744px",
        borderRadius: 2,
        backgroundColor: "black",
        position: "relative",
        mx: "12.8%",
      }}
    >
      <Grid container sx={{ pl: "56px" }}>
        <Grid item sx={{ pt: "96px", pb: "64px" }}>
          <img
            src={require("../../assets/img/WATERBORNE X BY HUSSEIN CHALAYAN.png")}
          ></img>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "santral",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "0px",
              textAlign: "left",
              color: "white",
            }}
          >
            Our culture has established a worldview where death is seen as an
            opposite force to life. Using world climate as a metaphor, this
            project reflects upon our sense of empowerment and our fears of
            mortality linked to the weather cycles. The climate constantly
            renews and recreates our environment, demonstrating that the life
            and death of all life forms are in a constant state of flux, whilst
            the longevity of Ocean life is now in our own hands.
          </Typography>
          <Grid item sx={{ pt: "56px" }}>
            <ButtonReal text='Learn More' width='200px' height='56px' />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ pl: 3 }}>
          <img
            src={require("../../assets/img/image.jpeg")}
            style={{
              height: "580px",
              width: "500px",
              zIndex: 1000,

              borderRadius: "16px",
            }}
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              width: "500px",
              height: "6%",
              top: "730px",
              backgroundColor: "#4d6462",
              alignItems: "center",
              borderRadius: "0px 0px 16px 16px",
              opacity: "0.9",
              display: "flex",
            }}
          >
            Photo credit: Cem Talu
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BigCard;
