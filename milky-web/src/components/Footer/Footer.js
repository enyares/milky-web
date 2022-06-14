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
          <Typography sx={{ color: "white", fontFamily: "santral", py: 2 }}>
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
          direction='row'
          justifyContent='center'
          alignItems='center'
          sm={4}
          xs={12}
          sx={{ px: "96px" }}
        >
          {["HomePage", "Collections", "Contact Us", "About Us", "Faq"].map(
            (item) => (
              <Grid item xs={12} sm={4}>
                <Typography sx={{ color: "white", fontFamily: "santral" }}>
                  {item}
                </Typography>
              </Grid>
            )
          )}
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
                style={{ paddingRight: 15 }}
              />
              <img
                src={require("../../assets/icons/instagram.png")}
                style={{ paddingRight: 15 }}
              />
              <img
                src={require("../../assets/icons/Icon.png")}
                style={{ paddingRight: 15 }}
              />
              <img
                src={require("../../assets/icons/baby.png")}
                style={{ paddingRight: 15 }}
              />
              <img
                src={require("../../assets/icons/ship.png")}
                style={{ padding: 1 }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          sm={12}
          xs={12}
        >
          {" "}
        </Grid>
        <Grid
          item
          sm={8}
          xs={12}
          direction='column'
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          <Typography
            sx={{ color: "white", fontFamily: "santral", fontSize: "12px" }}
          >
            2022 All Rights Reserved
          </Typography>
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          direction='column'
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          <Typography
            sx={{ color: "white", fontFamily: "santral", fontSize: "12px" }}
          >
            GDPR Terms of Service
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
