import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Drawer,
  IconButton,
  Grid,
  Container,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { pages } from "@/navigation/routes";

const MenuButton = ({ icon: Icon, label, description, onClick, to }) => (
  <Button
    component={Link}
    to={to}
    onClick={onClick}
    sx={{
      width: "100%",
      height: "100%",
      color: "white",
      textAlign: "left",
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    }}
  >
    <Icon sx={{ fontSize: 40, mb: 2 }} />
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
      {description}
    </Typography>
  </Button>
);

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Palestinian Children Archive
          </Typography>
          <Button
            color="inherit"
            onClick={() => setMenuOpen(true)}
            startIcon={<MenuIcon />}
          >
            Menu
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minHeight: "100vh",
            bgcolor: theme.palette.primary.dark,
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="white">
              Palestinian Children Archive
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{ color: "white" }}
              aria-label="close menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {pages.map((page) => (
              <Grid item xs={12} sm={6} md={3} key={page.path}>
                <MenuButton
                  icon={page.icon}
                  label={page.label}
                  description={page.description}
                  onClick={handleClose}
                  to={page.path}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Drawer>
    </Box>
  );
}
