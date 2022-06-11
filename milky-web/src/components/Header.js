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

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#000000" }}>
        <Toolbar>
          <Avatar sx={{ backgroundColor: "white", border: 1 }}>
            <MenuIcon sx={{ color: "#000000" }} />
          </Avatar>
          <Avatar sx={{ backgroundColor: "#000000", border: 1 }}>
            <SearchIcon />
          </Avatar>
          <Box sx={{ flexGrow: 1, alignContent: "center" }}>
            <Typography sx={{ fontFamily: "manrope" }}>MILKY</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="outlined"
              startIcon={<AccountBalanceWalletOutlinedIcon />}
            >
              Connect Wallet
            </Button>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <SailingIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
