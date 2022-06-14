import React from "react";
import { Grid, Typography } from "@mui/material";
import image89 from "../../assets/img/image89.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import twitter from "../../assets/icons/twitter.svg";
import insta from "../../assets/icons/insta.png";

const DetailCard = () => {
  return (
    <Grid container direction="row" style={{ width: "auto", height: "auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        item
        xs={6}
        sm={6}
        sx={{ pt: "5%", pr: "15%" }}
      >
        <Typography
          sx={{
            fontFamily: "santral",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            textAlign: "left",
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
            textAlign: "left",
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
            textAlign: "left",
            color: "#A6A6A6",
            pb: "51px",
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
        <Grid item container alignItems="center">
          <Typography
            sx={{
              fontFamily: "santral",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "17.6px",
              textAlign: "left",
              color: "white",
              textDecorationLine: "underline",
              textDecorationColor: "white",
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
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={6}
        sm={6}
      >
        Video
      </Grid>
    </Grid>
  );
};

export default DetailCard;
