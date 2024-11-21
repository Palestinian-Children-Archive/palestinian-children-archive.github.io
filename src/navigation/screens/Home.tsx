import { FC } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { pages } from "../routes";
import HeroImage from "../../assets/hero-image.png";
import WhyImage from "../../assets/why.jpg";
import FeatureCard from "@/components/ui/FeatureCard";

const HeroSection: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 70px)",
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "rgba(44, 82, 130, 0.95)",
            p: 4,
            borderRadius: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Palestinian Children Archive
          </Typography>
          <Typography variant="h6">
            Explore the lives of Palestine's children during the British Mandate
            of Palestine. Discover their oral, visual, and geographical
            histories.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const FeaturesSection: FC = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: "center" }}>
      Explore the Palestinian Children Digital Archive
    </Typography>
    <Grid container spacing={4}>
      {pages.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <FeatureCard
            description={feature.description}
            icon={feature.icon}
            title={feature.label}
            to={feature.path}
            order={index}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

const WhySection: FC = () => (
  <Box sx={{ bgcolor: "grey.50", py: 8 }}>
    <Container>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={WhyImage}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Why This Archive Matters
          </Typography>
          <Typography
            color="textPrimary"
            fontWeight="100"
            variant="h4"
            component="h2"
            gutterBottom
          >
            Why
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "text.secondary" }}
          >
            The Palestinian Childhood Archive during the British mandate
            addresses a critical gap in both historical scholarship and the
            broader cultural narrative regarding Palestinians during the British
            colonial period. The project is especially urgent because it aims to
            counter long-standing marginalization and stereotypes while
            preserving a disappearing generation's uniquely lived experiences.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "text.secondary" }}
          >
            The project is vital due to these key reasons:
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "text.secondary" }}
          >
            1. Challenging Western Discourse and Orientalist Stereotypes In
            Western oriental narratives, Palestinian children are often rendered
            invisible, and their experiences are overshadowed. Palestinians are
            rarely acknowledged as individuals with rich, complex lives shaped
            by culture, community, and history. During the British Mandate,
            colonial discourses were embedded in Orientalism, which portrayed
            Palestinian children as “savage” and "primitive." These children
            were depicted as lacking hygiene, discipline, or the capacity for
            intellectual development—reflecting a broader dehumanization of the
            Palestinian population. Such perspectives ignored the intricacies of
            Palestinian cultural practices, community values, and the local
            realities that shaped childhood experiences in Palestine. The
            Palestinian Childhood Archive provides alternatives to stereotypes
            that have been facilitated and understood through the Western
            Orientalist perspective.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "text.secondary" }}
          >
            2. Urgency Due to the Disappearing Generation The urgency of this
            project is due to the rapid aging of the generation who experienced
            childhood during the British Mandate. Many individuals who were
            children between 1917 and 1948 are now elderly, and their
            testimonies or oral histories are at risk of being lost. Oral
            histories from this generation are a crucial form of historical
            evidence, and the window for gathering these first-hand accounts is
            closing quickly. This project ensures that their voices are
            preserved for future generations, creating a lasting record of their
            lived experiences before it is too late.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "text.secondary" }}
          >
            3. Lack of Palestinian Ownership of Archival Documentation A key
            challenge facing the Palestinian community is the lack of ownership
            and control over archival documentation from the period of British
            rule. Many records from the Mandate period were produced and
            maintained by British authorities or foreign institutions, and these
            archives are often incomplete, biased, or inaccessible to
            Palestinians. This gap has left the Palestinian community without a
            comprehensive, authentic record of its own history from this era.
            The Palestinian Childhood Archive seeks to fill this gap by creating
            an online digital repository of Palestinian childhood experiences.
            This digital archive will house videos, audio recordings,
            photographs, and documents, all systematically categorized around
            the concept of "childhood infrastructure" in British-occupied
            Palestine.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: "text.secondary" }}
          >
            4. The Global South The archive is not just a repository of
            historical data; it is a tool for reclaiming the narrative around
            Palestinian childhood. It also provides an example for others in the
            global south societies to challenge the colonel narrative and
            reclaim their history. By showcasing oral histories and archival
            research it can provide a more accurate and empowering historical
            record and inspire other communities whose histories have been
            shaped or distorted by colonial policies.
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 3 }}>
            View Project Documentation
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
const HomePage: FC = () => (
  <Box>
    <HeroSection />
    <FeaturesSection />
    <WhySection />
  </Box>
);

export default HomePage;
