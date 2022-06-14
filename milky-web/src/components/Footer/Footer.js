import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{ width: "auto", height: "40vh", backgroundColor: "#000000" }}
      >
        <Grid
          container
          item
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          sm={4}
          xs={12}
          sx={{ px: "96px" }}
        >
          <img src={require("../../assets/img/Logo.png")} />
          <Typography sx={{ color: "white", fontFamily: "santral", pt: "1" }}>
            Meşrutiyet Caddesi, Passage Petits-Champs No:67/1 Tepebaşı,
            Istanbul, Turkey 34430
          </Typography>
          <Typography sx={{ color: "white", fontFamily: "santral" }}>
            <strong>info@milkynft.com</strong>
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          sm={4}
          xs={12}
          sx={{ px: "96px" }}
        >
          <List>
            <ListItem>
              <Typography sx={{ color: "white", fontFamily: "santral" }}>
                HomePage
              </Typography>
              <Typography sx={{ color: "white", fontFamily: "santral", px: 2 }}>
                Collections
              </Typography>
              <Typography sx={{ color: "white", fontFamily: "santral" }}>
                Contact Us
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={{ color: "white", fontFamily: "santral" }}>
                About Us
              </Typography>
              <Typography sx={{ color: "white", fontFamily: "santral", px: 3 }}>
                FAQ
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid
          container
          item
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          sm={4}
          xs={12}
          sx={{ px: "96px" }}
        >
          <List>
            <ListItem>
              <img
                src={require("../../assets/icons/linkedin.png")}
                style={{ padding: 1 }}
              />
              <img
                src={require("../../assets/icons/instagram.png")}
                style={{ padding: 1 }}
              />
              <img
                src={require("../../assets/icons/Icon.png")}
                style={{ padding: 1 }}
              />
              <img
                src={require("../../assets/icons/baby.png")}
                style={{ padding: 1 }}
              />
              <img
                src={require("../../assets/icons/ship.png")}
                style={{ padding: 1 }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
