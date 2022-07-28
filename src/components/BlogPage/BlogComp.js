import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import React from "react";
import { Link } from "react-router-dom";

const BlogComp = () => {
  return (
    <>
      <Grid container sx={{ px: "10%", py: "4%" }}>
        <Grid
          item
          sm={6}
          md={6}
          xs={12}
          justifyContent='center'
          alignItems='center'
        >
          <img
            src={require("../../assets/img/image4.png")}
            style={{ borderRadius: 10 }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          md={6}
          xs={12}
          justifyContent='flex-end'
          alignItems='center'
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              February 27
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{ fontFamily: "recoleta", mb: 1.5 }}
            >
              Material Art to Crypto Art: An Overview of NFTs
            </Typography>

            <Typography
              variant='body2'
              sx={{ mb: 1.5, fontFamily: "santral", opacity: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              faucibus magna vitae eget metus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Arcu faucibus magna vitae eget metus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <List>
              <ListItem sx={{ p: 0 }}>
                <Typography variant='body2'>NFT</Typography>{" "}
                <Typography variant='body2' sx={{ px: 1 }}>
                  Technlogy
                </Typography>{" "}
                <Typography variant='body2'>Metaverse</Typography>
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button size='small' component={Link} to='/blogdetail'>
              <Typography variant='body2'>Read More</Typography>
              <EastIcon />
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogComp;
