import React, { useState, useEffect } from "react";
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
  useScrollTrigger,
  Fade,
  Slide,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import {
  Close as CloseIcon,
  Menu as MenuIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { pages } from "@/navigation/routes";

function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Tooltip title="Scroll to top">
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
            size="large"
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Fade>
  );
}

const MenuButton = ({
  icon: Icon,
  label,
  description,
  onClick,
  to,
  isActive,
}) => (
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
      justifyContent: "normal",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "translateY(-4px)",
        "& .icon": {
          transform: "scale(1.1)",
        },
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: isActive ? "100%" : "0%",
        height: "3px",
        backgroundColor: "white",
        transition: "width 0.3s ease",
      },
    }}
  >
    <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
      <Icon sx={{ fontSize: 100, mb: 2 }} />
    </Box>
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontWeight: isActive ? 700 : 400,
        transition: "font-weight 0.3s ease",
      }}
    >
      {label}
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
      {description}
    </Typography>
  </Button>
);

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{ height: "70px" }}
          color="default"
          elevation={0}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Typography
                component={Link}
                to="/"
                variant={isMobile ? "h5" : "h5"}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                Palestinian Children and Community Archive
              </Typography>
            </Box>
            <Button
              color="inherit"
              onClick={() => setMenuOpen(true)}
              startIcon={<MenuIcon />}
              sx={{
                borderRadius: "20px",
                px: 2,
                transition: "all 0.3s ease",
                color: "black",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Menu
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minHeight: "100vh",
            bgcolor: theme.palette.primary.dark,
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          },
        }}
        transitionDuration={400}
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
            <Typography
              variant="h6"
              color="white"
              sx={{
                opacity: 0.9,
                fontWeight: 500,
              }}
            >
              Palestinian Children and Community Archive
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                color: "white",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "rotate(90deg)",
                },
              }}
              aria-label="close menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{
              mt: 4,
              animation: "fadeIn 0.5s ease-out",
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            {pages.map((page, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={page.path}
                sx={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <MenuButton
                  icon={page.icon}
                  label={page.label}
                  description={page.description}
                  onClick={handleClose}
                  to={page.path}
                  isActive={location.pathname === page.path}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Drawer>

      <ScrollTop />
    </>
  );
}
