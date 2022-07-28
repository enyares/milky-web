import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import BlogRideDetail from "./BlogRideDetail";

const BlogRightSide = () => {
  const array = [
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
      >
        <Grid item>
          <List>
            <ListItem>
              <Typography sx={{ fontFamily: "recoleta", fontSize: "16px" }}>
                Written by
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{ fontFamily: "recoleta-bold", fontSize: "16px" }}
              >
                Name Surname
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item sx={{ py: "15%" }}>
          <List>
            <ListItem>
              <Typography
                sx={{ fontFamily: "recoleta", fontSize: "16px", opacity: 0.6 }}
              >
                Tags
              </Typography>
            </ListItem>
            <ListItem>
              <strong>NFT</strong>, Metaverse, Technology,
              <strong>Digital Art</strong>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List>
            <ListItem>
              <Typography
                sx={{ fontFamily: "recoleta", fontSize: "16px", opacity: 0.6 }}
              >
                Recommended
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          {array.map((item, index) => {
            return <BlogRideDetail item={item} text={item.text} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default BlogRightSide;
