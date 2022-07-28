import { List, ListItem, Typography } from "@mui/material";
import React from "react";

const BlogLeftSide = () => {
  return (
    <List sx={{ px: 1 }}>
      <ListItem>
        <Typography
          sx={{ fontFamily: "santral", fontSize: "16px", textAlign: "justify" }}
        >
          <span style={{ fontSize: "30px" }}>L</span>orem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Arcu faucibus magna vitae
          eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus magna vitae eget metus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Arcu faucibus magna vitae
          eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </Typography>
      </ListItem>
      <ListItem sx={{ py: "5%" }}>
        <img
          src={require("../../assets/img/image4.png")}
          style={{ borderRadius: 10 }}
        />
      </ListItem>
      <ListItem>
        <Typography
          sx={{
            fontFamily: "santral",
            fontSize: "16px",
            textAlign: "justify",
            mb: "20%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus magna vitae eget metus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Arcu faucibus magna vitae
          eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus magna vitae eget metus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Arcu faucibus magna vitae
          eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus magna vitae eget metus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Arcu faucibus magna vitae
          eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus
          magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arcu faucibus magna vitae eget metus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Arcu faucibus magna vitae
          eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </ListItem>
    </List>
  );
};

export default BlogLeftSide;
