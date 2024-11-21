import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2C5282",
      light: "#4A90E2",
      dark: "#1A365D",
      darker: "#102A43",
    },
    secondary: {
      main: "#718096",
      light: "#A0AEC0",
      dark: "#4A5568",
    },
    background: {
      default: "#F7FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D3748",
      secondary: "#4A5568",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.75rem",
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.3s, box-shadow 0.3s",
        },
      },
    },
  },
});
