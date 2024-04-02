import { Link } from "react-router-dom";
import { Typography, IconButton, Grid, Container } from "@mui/material";
import { icons } from "../data/footer";
import Logo from "../assets/logo.svg";
import AppBar from "@mui/material/AppBar";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        backgroundColor: "transparent",
        transition: "background-color 0.5s ease",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ borderTop: "1px solid #fff" }} spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent={{ xs: "center", sm: "start" }}
            alignItems="center"
          >
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
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent={{ xs: "center", sm: "end", md: "center" }}
            alignItems="center"
          >
            <Typography variant="caption">
              Усі права захищені "Panama_shop" © {new Date().getFullYear()}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent={{ xs: "center", md: "end" }}
            alignItems="center"
          >
            {icons.map((icon, index: number) => (
              <IconButton
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ "&:hover": { transform: "scale(1.1)" } }}
              >
                <img src={icon.icon} alt={`icon-${index}`} width={24} />
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Footer;
