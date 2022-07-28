import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import Logoss from "../../assets/img/Logoss.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeaderBody from "./HeaderBody";

const pages = ["HomePage", "Collections", "About Milky", "FAQ", "Contact Us"];
const drawerWidth = "100%";
const Headers = (props) => {
  const { window } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawer = (
    <>
      <Box
        onClick={handleDrawerToggle}
        sx={{
          textAlign: "left",
          backgroundColor: "black",
        }}
      >
        <List>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <img src={Logoss} />
            <IconButton onClick={handleCloseNavMenu}>
              {" "}
              <CloseIcon
                sx={{
                  alignItems: "flex-end",
                  color: "white",
                  fontSize: "xx-large",
                }}
              />
            </IconButton>
          </ListItem>
        </List>

        <Box sx={{ backgroundColor: "black" }}>
          <List sx={{ p: 0 }}>
            {pages.map((item) => (
              <div>
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "santral",
                        fontSize: "28px",
                      }}
                    >
                      {item}
                    </Typography>
                  </ListItemButton>
                  <ArrowForwardIosIcon
                    sx={{ color: "white", fontSize: "small", pr: "10%" }}
                  />
                </ListItem>
              </div>
            ))}
          </List>
        </Box>
        <Box sx={{ backgroundColor: "black" }}>
          <List sx={{ mt: 5 }}>
            <ListItem>
              <img src={require("../../assets/img/Logo.png")} />
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
            <ListItem sx={{ pt: 0, mt: 5 }}>
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
        </Box>
      </Box>
    </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ background: "black" }}>
        <Toolbar>
          <Tooltip sx={{ display: { xs: "none", sm: "flex" } }}>
            <Box>
              <IconButton onClick={handleDrawerOpen} sx={{ p: 0 }}>
                <img
                  src={require("../../assets/icons/Menu.png")}
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                />
              </IconButton>
              <IconButton sx={{ px: 1 }}>
                <img
                  src={require("../../assets/icons/Search.png")}
                  style={{ width: "48px", height: "48px" }}
                />
              </IconButton>
            </Box>
          </Tooltip>

          <Box flexGrow={1} sx={{ display: { xs: "none", sm: "flex" } }} />

          <img src={Logoss} />
          <Box flexGrow={1} />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
            <Tooltip>
              <Box>
                <IconButton onClick={handleDrawerToggle} sx={{ p: 0 }}>
                  <img
                    src={require("../../assets/icons/Menu.png")}
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  />
                </IconButton>
                <IconButton sx={{ px: 1 }}>
                  <img
                    src={require("../../assets/icons/Search.png")}
                    style={{ width: "48px", height: "48px" }}
                  />
                </IconButton>
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "fullWidth" }} component='nav'>
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
              width: "100%",
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <img src={require("../../assets/icons/close.png")} />
            </IconButton>
          </DrawerHeader>
          <HeaderBody />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Headers;
