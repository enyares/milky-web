import { Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Title = (props) => {
  const {
    title = "",
    subTitle = "",
    detail = false,
    button = false,
    fontSize = "",
    textAlign = "flex-start",
    mt = "",
    py = "",
    fontFamily = "recoleta-bold",
  } = props;

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      sx={{
        px: "11%",
        mt: mt,
        py: py,
      }}
    >
      <Grid item sm={12} justifyContent='flex-start'>
        <List>
          <ListItem sx={{ textAlign: textAlign }}>
            <Typography sx={{ fontFamily: fontFamily, fontSize: fontSize }}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "santral",
                fontSize: "24px",
                opacity: 0.4,
              }}
            >
              {subTitle}
            </Typography>
            {button ? (
              <IconButton component={Link} to='/contact'>
                <img src={require("../../assets/icons/Arrow (1).png")} />
              </IconButton>
            ) : (
              ""
            )}
          </ListItem>
        </List>
      </Grid>

      {detail ? (
        <>
          <Grid
            spacing={2}
            sm={6}
            container
            item
            justifyContent='flex-end'
            alignItems='flex-end'
          >
            <List>
              <ListItem>
                <Typography
                  sx={{ fontFamily: "recoleta-bold", fontSize: "16px" }}
                >
                  {subTitle}
                </Typography>
                <IconButton>
                  <img src={require("../../assets/icons/ARROW.png")} />
                </IconButton>{" "}
              </ListItem>
            </List>
          </Grid>
        </>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default Title;
