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
        sx={{position: 'relative',}}
      >
        <img
          src={hussein}
          style={{ width: "64%", height: "88%", paddingTop: "10%" }}
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            width: "64%",
            height: "6%",
            bottom: 30,
            backgroundColor: "#4d6462",
            alignItems: "center",
            paddingLeft:5,
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
            fontFamily: "santral-bold",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "44.8px",
            textAlign: xsD ? "center" : "left",
            color: "#FFFFFF",
            pb: "32px",
          }}
        >
          The dress releases digital water drops containing the lifeforce of the
          Ocean. Each drop gains a new sense of value and life, reaching its
          eventual owner whilst re iterating the reclamation and protection of
          the Oceans, and all endangered lifeforms contained within.
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
          Hussein Chalayan was born in Nicosia, Cyprus and was graduated in 1993
          from London’s Central St Martins School of Art and Design. His degree
          collection was bought by British iconic boutique Browns, launching him
          as a significant new fashion force. In 1994 Hussein Chalayan started
          his own label. He was named British Designer of the Year in 1999 and
          in 2000. In his art and fashion work Chalayan uses film, installations
          and sculptural forms to explore perception and the realities of modern
          life, with particular interest in cultural identity, migration,
          anthropology, technology, nature and genetics. Chalayan lectures
          regularly about his work and has exhibited in museums worldwide
          including the V&A in London, The Kyoto Costume Institute, The Musée de
          la Mode-Palais du Louvre in Paris, The Metropolitan Museum of Art and
          MOMA in New York.
        </Typography>
        <Grid
          item
          container
          alignItems='center'
          sx={{ pb: xsD ?? "7%", pl: xsD ?? "3%", py: 2 }}
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
