import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            All images displayed are used from the public domains Wikimedia
            Commons and GetArchive.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We do not claim ownership of any images displayed from these
            platforms within this website.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 1 }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            Built with{" "}
            <FavoriteIcon
              sx={{
                fontSize: 16,
                verticalAlign: "text-bottom",
                color: "error.main",
              }}
            />{" "}
            by Palestinians
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
