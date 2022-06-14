import {
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const xsD = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        sx={{
          width: "auto",
          height: "auto",
          backgroundColor: "#000000",
          pt: "4%",
        }}
      >
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
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
          direction="row"
          justifyContent="flex-start"
          // alignItems="center"
          sm={4}
          xs={12}
          sx={{ px: "96px", height: "20%" }}
        >
          {["HomePage", "Collections", "Contact Us", "About Us", "FAQ"].map(
            (item) => (
              <Grid item xs={12} sm={4} container justifyContent="flex-start">
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
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sm={4}
          xs={12}
          // sx={{ px: "96px" }}
        >
          <List sx={{ pt: 0 }}>
            <ListItem sx={{ pt: 0 }}>
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
          item
          sm={12}
          xs={12}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid
            item
            container
            justifyContent={xsD ? "center" : "center"}
            sm={7}
            xs={12}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "santral",
                fontSize: "12px",
                fontWeight: 500,
                pl: !xsD ? "51%" : 0,
              }}
            >
              2022 All Rights Reserved
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" sm={5} xs={12}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "santral",
                fontSize: "12px",
                fontWeight: 500,
                pl: !xsD ? "6%" : 0,
              }}
            >
              GDPR Terms of Service
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
