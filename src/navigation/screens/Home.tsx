import { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import { pages } from "../routes";
import HeroImage from "../../assets/images/hero.png";
import WhyImage from "../../assets/images/significance.png";
import FeatureCard from "@/components/ui/FeatureCard";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionIcon = motion(KeyboardArrowDownIcon);

const HeroSection: FC = () => {
  const theme = useTheme();
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
        bgcolor: "ActiveBorder",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 70px)",
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100vw" }}>
        <MotionBox
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          sx={{
            bgcolor: theme.palette.primary.dark,
            p: 4,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Palestinian Children and Community Archive
          </Typography>
          <Typography variant="h6">
            Explore the lives of Palestine's children during the British Mandate
            of Palestine. Discover their oral, visual, and geographical
            histories.
          </Typography>
        </MotionBox>
      </Box>

      <MotionIcon
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [0, 20, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: 48,
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      />

      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 8,
          right: 16,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "4px 8px",
          borderRadius: 1,
        }}
      >
        © Wikimedia Commons and GetArchive
      </Typography>
    </MotionBox>
  );
};

const FeaturesSection: FC = () => (
  <Container sx={{ py: 8 }}>
    <MotionTypography
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      variant="h4"
      gutterBottom
      sx={{ mb: 4, textAlign: "center" }}
      color="textPrimary"
    >
      Explore the Palestinian Children Digital Archive
    </MotionTypography>
    <Grid container spacing={4}>
      {pages.map((feature, index) => (
        <MotionGrid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FeatureCard
            description={feature.description}
            icon={feature.icon}
            title={feature.label}
            to={feature.path}
            order={index}
          />
        </MotionGrid>
      ))}
    </Grid>
  </Container>
);

const WhySection: FC = () => (
  <Box sx={{ bgcolor: "grey.50", py: 8 }}>
    <Container>
      <Grid container spacing={6} alignItems="center">
        <MotionGrid
          item
          xs={12}
          md={4}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
          <Typography
            variant="caption"
            sx={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "4px 8px",
              borderRadius: 1,
            }}
          >
            © Wikimedia Commons and GetArchive
          </Typography>
        </MotionGrid>
        <MotionGrid
          item
          xs={12}
          md={8}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            color="textPrimary"
            fontWeight="100"
            variant="h4"
            component="h2"
            gutterBottom
          >
            Significance of the Project
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
          <Button
            component={Link}
            to="/about-us"
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
          >
            About the Project
          </Button>
        </MotionGrid>
      </Grid>
    </Container>
  </Box>
);
const HomePage: FC = () => (
  <Box bgcolor="background.paper">
    <HeroSection />
    <FeaturesSection />
    <WhySection />
  </Box>
);

export default HomePage;
