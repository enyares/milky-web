import React from "react";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SailingIcon from "@mui/icons-material/Sailing";
import MoreIcon from "@mui/icons-material/MoreVert";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Logoss from "../../assets/img/Logoss.svg";
const Header = () => {
  return (

      <AppBar
        position='fixed'
        style={{ background: "#000000", height: "96px" }}
      >
         
        <Toolbar sx={{ pt: 2,display:'flex', justifyContent: "space-between", }}>
          <Box>
            <img
              src={require("../../assets/icons/Menu.png")}
              style={{ width: "48px", height: "48px", paddingRight: "16px" }}
            />
            <img
              src={require("../../assets/icons/Search.png")}
              style={{ width: "48px", height: "48px" }}
            />
          </Box>
          <Box sx={{  alignContent: "center", }}>
            <img src={Logoss} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, }}>
            {/* <Button
              variant='outlined'
              startIcon={<AccountBalanceWalletOutlinedIcon />}
              sx={{
                height: "48px",
                color: "white",
                borderColor: "white",
                mr: 3,
              }}
            >
              Connect Wallet
            </Button> */}
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

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>

      </AppBar>
  );
};

export default Header;
