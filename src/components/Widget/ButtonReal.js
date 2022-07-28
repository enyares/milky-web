import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ButtonReal = ({
  text = "",
  width,
  height,
  backgroundColor = "white",
  color = "black",
  href = "",
  border = "",
  onClick,
}) => {
  return (
    <Button
      variant='contained'
      component={Link}
      to={href}
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        br: 1,
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonReal;
