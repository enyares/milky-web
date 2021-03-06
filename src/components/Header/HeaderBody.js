import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderBody = ({ handleDrawerClose }) => {
  const menuItems = [{
    title: "Homepage",
    root: "/",
  },
  {
    title: "Collections",
    root: "/collections",
  }, {
    title: "About Milky",
    root: "/aboutus",
  },
  {
    title: "FAQ",
    root: "/faq",
  },
  {
    title: "Contact Us",
    root: "/contact",
  },
  ]
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={30}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <List>
          {menuItems.map((item) => (
            <ListItem>
              <Button
                onClick={() => {
                  navigate(item?.root);
                  handleDrawerClose();
                }}
                style={{ textTransform: 'none' }}>
                <Typography
                  sx={{ color: "white", fontFamily: "santral", fontSize: "32px" }}
                >
                  {" "}
                  {item.title}
                </Typography>
              </Button>
            </ListItem>
          ))}

        </List>
      </Grid>
      <Grid item sx={{ mt: 7 }}>
        <List>
          <ListItem>
            <img src={require("../../assets/img/LogoMilky.png")} />
          </ListItem>
          <ListItem>
            <Typography
              sx={{ fontFamily: "santral", fontSize: "16px", color: "white" }}
            >
              Browse and buy digital art collections
            </Typography>
          </ListItem>
          <ListItem sx={{ mt: 5 }}>
            <Typography
              sx={{ fontFamily: "santral", fontSize: "32px", color: "white" }}
            >
              hello@milky.com
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              sx={{
                fontFamily: "santral",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.5);",
              }}
            >
              4517 Washington Ave. Manchester, Kentucky 39495
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              sx={{
                fontFamily: "santral",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.5);",
              }}
            >
              Privacy Policy
            </Typography>
          </ListItem>
          <ListItem sx={{ pt: 0, mt: 7 }}>
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
    </Grid>
  );
};

export default HeaderBody;
