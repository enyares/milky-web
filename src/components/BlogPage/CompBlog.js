import React from "react";
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
import { Link } from "react-router-dom";
const CompBlog = () => {
  return (
    <>
      <Grid container sx={{ px: "10%" }}>
        <Grid
          item
          sm={6}
          md={6}
          xs={12}
          sx={{ display: { xs: "flex", sm: "none" } }}
          justifyContent='center'
          alignItems='center'
        >
          <img
            src={require("../../assets/img/image5.png")}
            style={{ borderRadius: 10 }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          md={6}
          xs={12}
          justifyContent='flex-start'
          alignItems='center'
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              February 27
            </Typography>
            <Typography
              variant='h5'
              sx={{ fontFamily: "recoleta", mb: 1.5 }}
              component='div'
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
        <Grid
          item
          sm={6}
          md={6}
          xs={12}
          sx={{ display: { xs: "none", sm: "flex" } }}
          justifyContent='center'
          alignItems='center'
        >
          <img
            src={require("../../assets/img/image5.png")}
            style={{ borderRadius: 10 }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CompBlog;
