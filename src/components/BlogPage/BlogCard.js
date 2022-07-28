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

import React from "react";
const array = [
  {
    date: "February 27",
    title: "Material Art to Crypto Art: An Overview of NFTs",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibusmagna vitae eget metus. Lorem ipsum dolor sit amet, consecteturadipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscingelit. Arcu faucibus magna vitae eget metus. Lorem ipsum dolor sitamet, consectetur adipiscing elit.",
    tabs: "NFT",
    tabs2: " Technlogy",
    tabs3: "Metaverse",
  },
];
const BlogCard = (props) => {
  const {
    date = "",
    title = "",
    text = "",
    tabs = "",
    tabs2 = "",
    tabs3 = "",
    item,
  } = props;
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {date}
        </Typography>
        <Typography
          variant='h5'
          component='div'
          sx={{ fontFamily: "recoleta", mb: 1.5 }}
        >
          {title}
        </Typography>

        <Typography
          variant='body2'
          sx={{ mb: 1.5, fontFamily: "santral", opacity: 0.6 }}
        >
          {text}
        </Typography>
        <List>
          <ListItem sx={{ p: 0 }}>
            <Typography variant='body2'>{tabs}</Typography>{" "}
            <Typography variant='body2' sx={{ px: 1 }}>
              {tabs2}
            </Typography>{" "}
            <Typography variant='body2'>{tabs3} </Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button size='small' component={Link} to='/blogdetail'>
          <Typography variant='body2'>Read More</Typography>
          <EastIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
