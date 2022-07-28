/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import MoreIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Logoss from "../../assets/img/Logoss.svg";
import MegaMenu from "./MegaMenu";
import { styled } from "@mui/system";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <MegaMenu />
    </Box>
  );
  const DrawerHeader = styled("div")(() => ({
    display: "flex",
    alignItems: "center",

    justifyContent: "flex-end",
  }));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position='fixed'
        style={{ background: "#000000", height: "96px" }}
      >
        <Toolbar
          sx={{ pt: 2, display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <IconButton onClick={handleDrawerToggle} sx={{ p: 0 }}>
              <img
                src={require("../../assets/icons/Menu.png")}
                style={{ width: "48px", height: "48px", paddingRight: "16px" }}
              />
            </IconButton>
            <img
              src={require("../../assets/icons/Search.png")}
              style={{ width: "48px", height: "48px" }}
            />
          </Box>
          <Box sx={{ alignContent: "center" }}>
            <img src={Logoss} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton color='inherit'>
              <img
                src={require("../../assets/icons/Icon.png")}
                style={{ width: "29px", height: "22px" }}
              />
            </IconButton>
            <IconButton color='inherit'>
              <img
                src={require("../../assets/icons/baby.png")}
                style={{
                  width: "29px",
                  height: "29px",
                  paddingRight: "21px",
                  paddingLeft: "21px",
                }}
              />
            </IconButton>
            {/* <IconButton color='inherit'>
              <img
                src={require("../../assets/icons/ship.png")}
                style={{ width: "32px", height: "32px" }}
              />
            </IconButton> */}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
