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
  const {
    item,
    bgImage = "",
    showLinkedinIcon = false,
    showImage = false,
    ...rest
  } = props;
  return (
    <>
      <Card sx={{ width: "auto" }}>
        <CardMedia component='img' image={item?.img} alt='personelfoto' />
        <CardContent>
          <Typography>{item?.personName}</Typography>
          <Typography>{item?.personTitle}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <img src={require("../../assets/icons/linkedin.png")} />
          </IconButton>
          <IconButton>
            <img src={require("../../assets/icons/insta.png")} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default TeamCard;
