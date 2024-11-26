import { FC } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

interface FeatureCardProps {
  icon: FC;
  title: string;
  description: string;
  to: string;
  order: number;
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  to,
  order,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor:
          order % 2 === 0
            ? theme.palette.primary.main
            : theme.palette.primary.light,
        color: "white",
        borderRadius: 1,
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent
        sx={{
          p: "0 !important",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "transparent",
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon sx={{ fontSize: 100 }} />
        </Box>

        <Box
          sx={{
            p: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            flexGrow: 1,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Button
            component={Link}
            to={to}
            variant="contained"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
              textTransform: "none",
              borderRadius: 1,
              px: 3,
              py: 1,
            }}
          >
            Enter
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
