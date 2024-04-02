import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import Basket from "./common/Basket";
import { Stack } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import Logo from "../assets/logo.svg";

const pages = [
  { icon: <AppsIcon />, pageLink: "/products" },
  { icon: <FavoriteBorderIcon />, pageLink: "/favorite" },
];

function Header() {
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        backgroundColor: "transparent",
        transition: "background-color 0.5s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              // fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} height={32} alt="Logo" />
          </Typography>

          <Stack
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
            direction="row"
          >
            {pages.map(({ icon, pageLink }, index) => (
              <IconButton
                component={Link}
                to={pageLink}
                key={index}
                color="primary"
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

          <Basket />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
