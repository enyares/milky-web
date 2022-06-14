import { Button } from "@mui/material";
import React from "react";

const ButtonComp = ({ label = "" }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "400px",
        height: "56px",
        backgroundColor: "black",
        color: "white",
        "&:hover": { backgroundColor: "black" },
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComp;
