import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import hussein from "../../assets/img/hussein.jpeg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import twitter from "../../assets/icons/twitter.svg";
import insta from "../../assets/icons/insta.png";
const BlackCard = () => {
  const theme = useTheme();
  const xsD = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction='row'
      style={{ width: "auto", height: "auto", backgroundColor: "black" }}
    >
      <Grid
        item
        container
        justifyContent='center'
        alignItems='center'
        xs={12}
        sm={6}
      >
        <img
          src={hussein}
          style={{ width: "64%", height: "88%", paddingTop: "10%" }}
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            width: "513px",
            height: "6%",
            top: "1126px",
            backgroundColor: "#4d6462",
            alignItems: "center",

            opacity: "0.9",
            display: "flex",
          }}
        >
          Photo credit: Semra Russell
        </div>
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        item
        xs={12}
        sm={6}
        sx={{ pt: "5%", pr: xsD ? "2%" : "15%" }}
      >
        <Typography
          sx={{
            fontFamily: "santral",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            textAlign: xsD ? "center" : "left",
            color: "#808080",
            pb: "24px",
          }}
        >
          HUSSEIN CHALAYAN
        </Typography>
        <Typography
          sx={{
            fontFamily: "santral",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "44.8px",
            textAlign: xsD ? "center" : "left",
            color: "#FFFFFF",
            pb: "32px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          fringilla magna vitae eget metus.
        </Typography>
        <Typography
          sx={{
            fontFamily: "santral",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23.36px",
            textAlign: xsD ? "center" : "left",
            color: "#A6A6A6",
            pb: xsD ? "10px" : "51px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          fringilla magna vitae Eget metus.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus fringilla magna vitae eget
          metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
          faucibus fringilla magna vitae eget metus.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus fringilla magna vitae eget
          metus. Eget metus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus fringilla magna vitae eget metus.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Arcu faucibus fringilla magna
          vitae eget metus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus fringilla magna vitae eget metus.
        </Typography>
        <Grid
          item
          container
          alignItems='center'
          sx={{ pb: xsD ?? "7%", pl: xsD ?? "3%" }}
        >
          <Typography
            sx={{
              fontFamily: "santral",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "17.6px",
              textAlign: "left",
              color: "white",
            }}
          >
            Biography
          </Typography>
          <img
            src={rightArrow}
            style={{ width: "13px", height: "8px", marginRight: "22px" }}
          />
          <img
            src={insta}
            style={{ width: "20px", height: "20px", marginRight: "28px" }}
          />
          <img src={twitter} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlackCard;
