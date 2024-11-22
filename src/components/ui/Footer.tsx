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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
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
