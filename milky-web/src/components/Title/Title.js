import { Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import MoreIcon from "@mui/icons-material/MoreVert";

const Title = (props) => {
  const {
    title = "",
    subTitle = "",
    detail = false,
    button = "false",
    fontSize = "",
  } = props;

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      // sx={{ mr: "12.8%", ml: "12.8%" }}
      sx={{ px: "12.8%" }}
    >
      <Grid item sm={6} justifyContent='flex-start'>
        <List>
          <ListItem>
            <Typography sx={{ fontFamily: "santral", fontSize: fontSize }}>
              {title}
            </Typography>
            {button ? (
              <IconButton>
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
                <Typography sx={{ fontFamily: "santral", fontSize: "16px" }}>
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
