import { Button } from "@mui/material";
import { color, height } from "@mui/system";
import React from "react";

const ButtonReal = ({
  text = "",
  width,
  height,
  backgroundColor = "white",
  color = "black",
}) => {
  return (
    <Button
      variant="contained"
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
