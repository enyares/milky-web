import { Divider, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

const BlogRideDetail = (props) => {
  const { item, text = "" } = props;
  return (
    <>
      <List>
        <ListItem sx={{ py: 0 }}>
          <Typography sx={{ fontFamily: "recoleta", fontSize: "12px" }}>
            {text}
          </Typography>
          <IconButton>
            <CallMadeIcon sx={{ color: "black" }} />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
    </>
  );
};

export default BlogRideDetail;
