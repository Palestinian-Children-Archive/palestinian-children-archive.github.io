import { FC } from "react";
import { Book } from "@mui/icons-material";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const paragraphs = [
  'To effectively organize the data for individual oral histories and the records of human experiences within archives, it was essential to develop a framework of categories to conceptualize a comprehensive List of Childhood Infrastructure (LCI). The Library of Congress Subject Headings (LCSH) identified various traditions, policies, and resources that shaped this list. Curated into at least 20 categories, each containing a minimum of 3 items, the list aims to encompass a broad range of childhood infrastructure. For example, the category "Water" includes spring water, seawater, wells, etc. This categorization facilitates a deeper understanding of childhood infrastructure, moving beyond the traditional focus on policies related to health, education, and welfare.',
  "It was crucial to include childhood infrastructure because the British colonization of the era significantly impacted Palestinian economic and social structures, indirectly affecting children’s lives. For instance, changes in taxation affected farmers' ability to maintain their land, thereby impacting their children’s livelihoods. Another key category is \"Transportation,\" which encompasses auto roads, railways, seasonal roads (which were not used during the winter), and animal trails. Road infrastructure played a vital role, especially regarding children's access to healthcare and education during pandemics. ",
  "Other elements that are not typically associated with childhood but is included in the LCI are the post office, community associations, etc. While it may seem peripheral, the post office was an essential communication tool for families in Palestine, both within the region and internationally, during this period. Community associations were essential structures in organizing the villages, elections, assigning parcels of land, etc. These are just a few examples of the extensive categories included in the LCI, with the process still ongoing as new elements are uncovered through data surveying.",
  "An additional benefit of the LCI is its role in enhancing the search and navigation experience. The categorization will be used as a subject for search tabs, allowing reviewers to navigate to relevant data more efficiently as they explore the archives. ",
];

const rows = [
  {
    tradition: "Customs",
    healthcare: "Pandemics",
    policies: "Campaigns",
    religion: "Mosques",
    education: "Teachers",
    agriculture: "Irrigation",
  },
  {
    tradition: "Wedding",
    healthcare: "Public Health",
    policies: "Counsels",
    religion: "Monasteries",
    education: "Schools",
    agriculture: "Farming",
  },
  {
    tradition: "Marriage",
    healthcare: "Midwives",
    policies: "Elections",
    religion: "Churches",
    education: "Admissions",
    agriculture: "Cultivation",
  },
];

const Infrastructure: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "primary.dark",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Book sx={{ fontSize: "100px" }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Childhood Records
          </Typography>
          <Typography variant="h6">
            Archival data constitutes evidence of diverse perspectives about
            Palestinian childhood reality during the British Mandate (BM).
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container>
          {paragraphs.map((p) => (
            <Typography sx={{ color: "text.secondary", marginBottom: 2 }}>
              {p}
            </Typography>
          ))}
        </Container>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Tradition</TableCell>
                  <TableCell align="center">Healthcare</TableCell>
                  <TableCell align="center">Policies</TableCell>
                  <TableCell align="center">Religion</TableCell>
                  <TableCell align="center">Education</TableCell>
                  <TableCell align="center">Agriculture</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.tradition}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.tradition}
                    </TableCell>
                    <TableCell align="center">{row.healthcare}</TableCell>
                    <TableCell align="center">{row.policies}</TableCell>
                    <TableCell align="center">{row.religion}</TableCell>
                    <TableCell align="center">{row.education}</TableCell>
                    <TableCell align="center">{row.agriculture}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default Infrastructure;
