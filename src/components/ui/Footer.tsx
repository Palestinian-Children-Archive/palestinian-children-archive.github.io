import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ccIcons = ["cc", "by", "nc", "nd"];

export default () => {
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
        {/* Licence notice, identical on the collection site's footer. It
            replaces the old "All rights reserved", which contradicted it. */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
            mb: 1.5,
            lineHeight: 1.6,
            "& a": {
              color: "text.primary",
              fontWeight: 500,
              textDecorationColor: "rgba(0, 0, 0, 0.3)",
              textUnderlineOffset: "0.2em",
              "&:hover": {
                color: "primary.main",
                textDecorationColor: "currentColor",
              },
            },
          }}
        >
          <MuiLink href="https://palestinianchildhoodarchive.org/">
            Palestinian Childhood Archive
          </MuiLink>{" "}
          © 2026 by Janette&nbsp;Habashi is licensed under{" "}
          <MuiLink
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            rel="license noopener noreferrer"
            sx={{
              whiteSpace: "nowrap",
              "&:hover img": { opacity: 1 },
            }}
          >
            CC BY-NC-ND 4.0
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                display: "inline-flex",
                gap: "0.2em",
                ml: "0.4em",
                verticalAlign: "-0.2em",
                "& img": {
                  width: "1.15em",
                  height: "1.15em",
                  opacity: 0.7,
                  transition: "opacity 0.15s",
                  // The icons are black SVGs; flip them if the footer is dark.
                  filter: (theme) =>
                    theme.palette.mode === "dark" ? "invert(1)" : "none",
                },
              }}
            >
              {ccIcons.map((name) => (
                <img
                  key={name}
                  src={`https://mirrors.creativecommons.org/presskit/icons/${name}.svg`}
                  alt=""
                />
              ))}
            </Box>
          </MuiLink>
        </Typography>
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
          <MuiLink
            href="https://palestinian-children-archive.github.io/pcca/"
            variant="body2"
            underline="hover"
            color="text.secondary"
          >
            Collection Data
          </MuiLink>
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
        </Stack>
      </Container>
    </Box>
  );
};
