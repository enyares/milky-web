import { Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";

const AboutView = () => {
  return (
    <>
      <Grid container direction='row' sx={{ px: "25%", py: "12%" }}>
        <Grid item sm={6}>
          <img src={require("../../assets/img/TEAM MILKY.png")} />
        </Grid>
        <Grid item sm={6} sx={{ height: "136px", width: "524px" }}>
          <List>
            <ListItem>
              <Typography
                sx={{
                  fontFamily: "santral",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                feugiat scelerisque est placerat eget tristique est. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={{ fontFamily: "santral", fontSize: "16px" }}>
                <strong>Learn More</strong>
              </Typography>
              <IconButton>
                <img src={require("../../assets/icons/ARROW.png")} />
              </IconButton>{" "}
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutView;
