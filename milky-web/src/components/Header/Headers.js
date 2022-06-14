import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logoss from "../../assets/img/Logoss.svg";

const Header = ({ contactUsRef, ourAppsRef, aboutUsRef }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  function smoothTransition(ref) {
    window.scrollTo({ behavior: "smooth", top: ref?.current?.offsetTop - 120 });
  }
  const pages = [
    { name: "About us", onClick: () => smoothTransition(aboutUsRef) },
    { name: "Our Apps", onClick: () => smoothTransition(ourAppsRef) },
    { name: "Contact", onClick: () => smoothTransition(contactUsRef) },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='fixed'
      style={{
        height: 112,
        justifyContent: "center",
        // p: "1%",
        backgroundColor: "#000000",
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={Logoss} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page?.name}
                  onClick={() => {
                    page?.onClick?.();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography
                    textAlign='center'
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      ":hover": {
                        background:
                          "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                    }}
                  >
                    {page?.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <img
              src={require("../../assets/icons/Menu.png")}
              style={{ width: "150px", height: "68px" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page?.name}
                onClick={() => page?.onClick?.()}
                sx={{ my: 2, color: "white", display: "block", mx: 5 }}
              >
                <Typography
                  textAlign='center'
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    ":hover": {
                      background:
                        "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                >
                  {page?.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
