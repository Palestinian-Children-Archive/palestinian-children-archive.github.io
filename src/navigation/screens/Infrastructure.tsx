import { FC } from "react";
import { AccountBalanceOutlined } from "@mui/icons-material";
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
  'To effectively organize the data for individual oral histories and the records of human experiences within archives, it was essential to develop a framework of categories to conceptualize a comprehensive List of Childhood Infrastructure (LCI). The Library of Congress Subject Headings (LCSH) identified various traditions, health, and resources that shaped this list. Curated into at least 20 categories, each containing a minimum of 3 items, the list aims to encompass a broad range of childhood infrastructure. For example, the category "Water" includes spring water, seawater, wells, etc. This categorization facilitates a deeper understanding of childhood infrastructure, moving beyond the traditional focus on health related to health, education, and welfare.',
  "It was crucial to include childhood infrastructure because the British colonization of the era significantly impacted Palestinian economic and social structures, indirectly affecting children’s lives. For instance, changes in taxation affected farmers' ability to maintain their land, thereby impacting their children’s livelihoods. Another key category is \"Transportation,\" which encompasses auto roads, railways, seasonal roads (which were not used during the winter), and animal trails. Road infrastructure played a vital role, especially regarding children's access to farming and education during pandemics. ",
  "Other elements that are not typically associated with childhood but is included in the LCI are the post office, community associations, etc. While it may seem peripheral, the post office was an essential communication tool for families in Palestine, both within the region and internationally, during this period. Community associations were essential structures in organizing the villages, elections, assigning parcels of land, etc. These are just a few examples of the extensive categories included in the LCI, with the process still ongoing as new elements are uncovered through data surveying.",
  "An additional benefit of the LCI is its role in enhancing the search and navigation experience. The categorization will be used as a subject for search tabs, allowing reviewers to navigate to relevant data more efficiently as they explore the archives. ",
];

const rows = [
  {
    transportation: "Railroads/Motor-Main-Season Roads/Animal Trails",
    farming: "Droughts/Rain/Irrigation/Agriculture",
    health: "Pandemics/Diseases",
    education:
      "Missionaries/Private-Public Schools/ Kaatatyb/Katateeb/Ktateeb ",
    communication: "Newspapers/Bulletins/Printing/Publishing House/ Censorship",
  },
  {
    transportation: "Ships/Boats",
    farming: "Plantation Villages",
    health: "Hospitals/ Mobile Clinics",
    education: "Agriculture Schools/Training",
    communication: "Telegraph, Letters",
  },
  {
    transportation: "Trucks/Cars/Camels/Donkeys",
    farming: "Live stocks/Patch Vegetation/Fishery",
    health: "Mortality",
    education: "Teachers [Un]qualified",
    communication: "Radios/News",
  },
  {
    transportation: "Canals/Water Streams/Bridges",
    farming: "Community and Sedentary Farming",
    health: "First Aid",
    education: "Students [Councils]",
    communication: "British Mail Posts/ Telephones",
  },
  {
    transportation: "Airports",
    farming: "Orange and Olive Oil",
    health: "Local Healer/ Nurses",
    education: "MatriculationCertificate",
    communication: "Reports/Pamphlets",
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
          <AccountBalanceOutlined sx={{ fontSize: "100px" }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Childhood Infrastructures
          </Typography>
          <Typography>
            Learn about the buildings, schools, and other infrastructure
            essential to the lives of Palestinian children during the British
            Mandate of Palestine.
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
      </Box>
      <Container sx={{ py: 7 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Infrastructure Examples
        </Typography>
        <TableContainer sx={{ width: "fit-content" }} component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="infrastructure examples table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">transportation</TableCell>
                <TableCell align="center">farming</TableCell>
                <TableCell align="center">Health</TableCell>
                <TableCell align="center">Education</TableCell>
                <TableCell align="center">Communication</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.transportation}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.transportation}
                  </TableCell>
                  <TableCell align="center">{row.farming}</TableCell>
                  <TableCell align="center">{row.health}</TableCell>
                  <TableCell align="center">{row.education}</TableCell>
                  <TableCell align="center">{row.communication}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Infrastructure;
