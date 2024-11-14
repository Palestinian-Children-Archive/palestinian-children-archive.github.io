import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import {
  Book as BookIcon,
  Map as MapIcon,
  AccountBalance as BuildingIcon,
  SpeakerGroup,
  QuestionMark,
} from "@mui/icons-material";
import { pages } from "../routes";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: FC;
  title: string;
  description: string;
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          cursor: "pointer",
        },
        transition: "background-color 0.3s",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Icon sx={{ fontSize: 40, mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: "auto",
              backgroundColor: theme.palette.primary.dark,
              "&:hover": {
                backgroundColor: theme.palette.primary.darker,
              },
            }}
          >
            Find
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.dark", color: "white", py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Palestinian Children Archive
              </Typography>
              <Typography variant="h6">
                Explore the lives of Palestine's children during the British
                Mandate of Palestine. Explore the oral, visual, and geographical
                aspects of their lives.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  bgcolor: "primary.main",
                  borderRadius: 1,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Grid */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {pages.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.label}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  bgcolor: "grey.200",
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" gutterBottom>
                About
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "text.secondary" }}
              >
                The Palestinian Children Archive aggregates and collates many
                different sources of information that document and illustrate
                the lives of the children of Palestine and their struggles
                during the British Mandate of Palestine.
              </Typography>
              <Button variant="contained" color="primary" size="large">
                View project documentation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
