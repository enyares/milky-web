import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ButtonReal = ({
  text = "",
  width,
  height,
  backgroundColor = "white",
  color = "black",
}) => {
  return (
    <Button
      variant='contained'
      component={Link}
      to='/collections'
      sx={{
        width: width,
        height: height,
        color: color,
        backgroundColor: backgroundColor,
        br: 1,
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonReal;
