import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import routes from "@/navigation/routes";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Palestinian Children Archive
          </Typography>

          {routes.map((r) => (
            <Button
              key={r.path}
              color="inherit"
              onClick={() => navigate(r.path)}
            >
              {r.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
