import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamCard = (props) => {
  const { item } = props;
  return (
    <>
      <Card sx={{ width: "auto", backgroundColor: "black" }}>
        <CardMedia
          sx={{ borderRadius: 2 }}
          component='img'
          title='Photo credit: Cem Talu'
          image={item?.img}
          alt='personelfoto'
        />

        {/* <CardContent>
          <Typography
            sx={{
              color: "white",
              fontFamily: "santral",
              fontSize: "2opx",
              backgroundColor: "gray",
              width: "auto",
            }}
          >
            Photo credit: Cem Talu
          </Typography>
        </CardContent> */}
        <CardContent>
          <Typography
            sx={{ color: "white", fontFamily: "santral", fontSize: "24px" }}
          >
            <strong>{item?.personName}</strong>
          </Typography>
          <Typography
            sx={{ color: "white", fontFamily: "santral", fontSize: "20px" }}
          >
            {item?.personTitle}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <img src={require("../../assets/icons/linkedin.png")} />
          </IconButton>{" "}
          <IconButton>
            <img src={require("../../assets/icons/insta.png")} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default TeamCard;
