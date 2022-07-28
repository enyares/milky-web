import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

const TitleCenter = (props) => {
  const {
    title = "",
    subTitle = "",
    detail = false,
    button = false,
    fontSize = "",
    py = "",
    px = "12.8%",
  } = props;
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      sx={{
        px: px,
        py: py,
      }}
    >
      <Grid item sm={12} justifyContent='center'>
        <List sx={{ textAlign: "center" }}>
          <ListItem sx={{ textAlign: "center", justifyContent: "center" }}>
            <Typography
              sx={{
                fontFamily: "recoleta-bold",
                fontSize: fontSize,
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              sx={{
                px: "10%",
                fontFamily: "santral",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {subTitle}
            </Typography>
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

export default TitleCenter;
