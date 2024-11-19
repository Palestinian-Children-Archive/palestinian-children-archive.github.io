import { ExpandMore, InfoRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "primary.dark", color: "white", py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                About The Project
              </Typography>
              <Typography variant="h6">
                Learn more about the Palestinian Childhood Archive here.
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

      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={6} md={2}>
              <InfoRounded color="primary" sx={{ fontSize: 80 }} />
            </Grid>
            <Grid item xs={6} md={10}>
              <Typography paragraph color="textSecondary">
                The Palestinian Childhood Archive during the British Mandate is
                a project focused on documenting and preserving the lived
                experiences of Palestinian children during the period of British
                colonial rule in Palestine (1917-1948). The archive aims to shed
                light on how the lives of Palestinian children were shaped by
                both their local communities and the policies and structures of
                the British Mandate. This is achieved through collecting and
                preserving individual oral histories and records documenting
                human experiences from 41 global archives. The organization of
                this data is through the development of categories for
                children's lived experiences named the Infrastructure of the
                Childhood. This list of categories facilitated the structure and
                module creation to navigate the data within individual oral
                histories and global archival records.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "primary.dark", py: 8 }}>
        <Container>
          {keyAspects.map((i) => (
            <Box sx={{ py: 2 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {i.key}
                </AccordionSummary>
                <AccordionDetails>
                  <>
                    {i.text}
                    {i.points && (
                      <Box>
                        <ul>
                          {i.points.map((p) => (
                            <li>{p}</li>
                          ))}
                        </ul>
                      </Box>
                    )}
                  </>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

const keyAspects = [
  {
    key: "Preserving Records of Human Experiences",
    text: "By gathering archival materials associated with human experiences—such as government documents, military and educational records, and reports on resources such as water and health care from Red Cross institutions—the project aims to create a comprehensive historical record of childhood under the British Mandate. These records will be essential for identifying policies like education curricula, social services, and economics that shaped the lives of Palestinian children.",
  },
  {
    key: "Individual Oral Histories and Personal Testimonies",
    text: "Individual oral histories and personal testimonies play a critical role in this archive. The voices of those who lived through the era—Palestinians who experienced childhood during the British Mandate—offer unique insights into the day-to-day realities and culture of the time. These testimonies provide rich, nuanced accounts of family life, customs, education, and community interaction. In addition, it humanizes the perspective of the Palestinian political context and gives the historical record a more complete picture of childhood under colonialism.",
  },
  {
    key: "The Infrastructure of Childhood",
    text: "To organize and present the wealth of data collected through individual oral histories and global records of human experience materials, the project developed a list of categories that included direct and indirect elements that impacted children’s lives. The below list is an example of the categorization for children's lived experiences during the British Mandate into key areas such as:",
    points: [
      "Education and Schooling: The impact of British-controlled curricula, missionary schools, Katatiib [localized children’s education], and educational reforms.  ",
      "Taxes: The ramifications of the British taxation system caused a heightened cost of living and the influence of generational poverty and inequality.  ",
      "Health and Well-being: The influence of British health policies, medical access, pandemics, and public health initiatives on childhood. ",
      "Farming: British policies [delanding, land transfers, theft, etc.] on land limited Palestinian income opportunities and livelihood.  ",
      "Structure of Communication: The various forms [telegraphs, letters, radio, etc.] of  British communication to monitor Palestinian lives and exchange military correspondence. ",
    ],
  },
];

export default AboutUs;
