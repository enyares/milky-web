import React from "react";
import { Grid, Typography, Chip, Link } from "@mui/material";
import image89 from "../../assets/img/image89.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import twitter from "../../assets/icons/twitter.svg";
import Video1 from '../../assets/videos/2.mp4'
import blackRightArrow from "../../assets/icons/blackRightArrow.svg";
import AvatarChip from "../UIComp/AvatarChip";
import ButtonComp from "../UIComp/ButtonComp";
import ReactPlayer from "react-player";

const DetailCard = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{ width: "auto", height: "auto", px: "12%", pt: "12%" }}
    >
      <Grid item container sm={6} xs={12} sx={{ pt: "23px" }}>
        <Chip
          label={
            <Grid container>
              <Typography
                sx={{
                  fontFamily: "santral",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "15.4px",
                  color: "black",
                }}
              >
                Initial Sale Date :
              </Typography>
              <Typography
                sx={{
                  fontFamily: "santral",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "15.4px",
                  color: "black",
                }}
              >
                Apr 19, 2020
              </Typography>
            </Grid>
          }
          sx={{ width: "257px", height: "33px", backgroundColor: "#F2F2F2" }}
        />
        <Grid item container>
          <Typography
            sx={{
              fontFamily: "recoleta",
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: "75.32px",
              color: "black",
            }}
          >
            WATERBORNE
          </Typography>
          <Typography
            sx={{
              fontFamily: "recoleta",
              fontSize: "56px",
              fontWeight: 300,
              lineHeight: "75.32px",
              color: "#F1C1AC",
            }}
          >
            X
          </Typography>
        </Grid>
        <Typography
          sx={{
            pt: 4,
            fontFamily: "santral",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "25.68px",
            color: "#00000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          vitae adipiscing convallis nibh pretium. Vel mus consequat quis sit
          morbi. Pulvinar tellus amet congue quam euismod egestas risus.
        </Typography>

        <Grid container item direction="row" sx={{ pt: "32px", pb: "48px" }}>
          <Grid item>
            <AvatarChip label="Huseyin Caglayan" title="Artist" />
          </Grid>
          <Grid item sx={{ pl: "12px" }}>
            <AvatarChip label="Collection Name" title="Collection" />
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontFamily: "santral",
            fontStyle: "normal",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "110%",
            color: "rgba(0, 0, 0, 0.4)",
            pb: "16px",
          }}
        >
          License
        </Typography>
        <Grid container item direction="row" sx={{ pb: "56px" }}>
          <Typography
            sx={{
              fontFamily: "santral",
              fontStyle: "normal",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "110%",
              color: "black",
            }}
          >
            CC BY-NC 4.0
          </Typography>
          <img
            src={require("../../assets/icons/Arrow (1).png")}
            style={{
              width: "16px",
              height: "16px",
              paddingTop: "2px",
              paddingLeft: "4px",
            }}
          />
        </Grid>
        <Grid container item direction="column">
          <ButtonComp label="Connect Wallet" />
          <Grid container sx={{ pt: "12px" }}>
            <Link
              sx={{
                fontFamily: "santral",
                fontStyle: "normal",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "15.4px",
                color: "black",
                pl: "25%",
              }}
            >
              Visit Contract Address
            </Link>
            <img
              src={blackRightArrow}
              style={{
                width: "13px",
                height: "8px",
                marginLeft: "5px",
                marginTop: "3px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container sx={{borderRadius:20}} xs={12} sm={6}>
      <ReactPlayer url={Video1} width="100%" height="100%" controls />
      </Grid>
    </Grid>
  );
};

export default DetailCard;
