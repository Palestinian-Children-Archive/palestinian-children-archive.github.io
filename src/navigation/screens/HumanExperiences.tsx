import { Book } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const paragraphs = [
  "Archival data constitutes evidence of diverse perspectives about Palestinian childhood reality during the British Mandate (BM). These human records are critical to understanding the Palestinian communities' conditions.  These materials related to Palestinian childhood during the British Mandate are largely untapped by researchers and have remained under-recognized due to barriers of access, language, and institutional control. These archives contain a wealth of information about the conditions and realities of Palestinian life and are housed in British, European, or Israeli repositories. The Western control of archives has led to historical erasure, where Palestinian narratives about their own childhood, culture, and daily life have been marginalized or distorted. This archive, therefore, not only serves as a historical record but also as an act of cultural reclamation, allowing academics and individuals to access and interpret this documentation. Records of human experiences provide critical evidence of the conditions and systems that shaped the realities of Palestinian childhood under British colonial rule.",
  "Obtaining these archival data allows the discovery of the conditions, infrastructures, and images portrayed about children. These facets are recorded in health and educational provisions, policing, government reports, economic structure, court cases, etc. Additionally, it provides a path to interpret past events and the conditions in which Palestinian childhood developed. This project aims to build a collection of childhood experiences based on different archival materials.",
  "A sample of the archives that were primarily utilized are:",
  "The British National Archive (court cases and civil records), The British Library (photographs of daily life, maps, books, journals, etc.), the LLMC digital database (Law: Policies/Procedures, Ordinances, records), St. Anthony’s College at The University of Oxford’s Middle East Centre Archive (School newspapers, ), Bristol University Archive (Photographs of daily life, maps, journals from British military personnel), Yale University Archive (Photographs of daily life, maps, journals from British military personnel), Berkeley University (Correspondence letters), The Wilson Center (Reports from conferences, reports on arrests and disturbances), NYU Global (Legal research in Israel), The Labor Party Archive (Unknown), Hagana Historical Archive (Unknown), The Knesset (Ordinances), The Israel State Archive (Civil and Criminal records, Judgments, Ordinances, treaties, Prisoner records, transfer requests, judgments, and commutations), Open Jerusalem (Ordinances, civil documents, religious documents, press releases, dossiers, government official communications), Columbia University (Narratives, interviews, photos, maps), United Nations Archive (Civil Records), National Library of Israel (Newspaper articles), Jrayed Archive (Newspaper articles), Tel Aviv Municipal Archive (Municipal Records), Birzeit University, and Al Manha (Newspaper articles, reports (no mandate era docs)), Qatar Libary (Photographs of daily life and maps), Mondoweiss (municipal records), Hagana Historical Archives (Reference list of research sources), and Khalidi Library.",
  "These materials provide reports regarding (policies, economics, social structure, culture, etc.) that contributed to this construction of Palestinian childhood—some of these elements connected to children's education, food, water, health, and policing.",
  "Official documents from the British authorities reflect how children were treated under occupation, including court cases, police reports, and military regulations. Economic reports and government policies reflect how taxation, labor, and resources affected the livelihoods of Palestinian families and children.  These repositories are ripe with documentation, artifacts, and collections critical to understanding the resources that governed children’s well-being in that era. This data facilitates the articulation of colonial policies that were enacted on the ground and their direct impact on Palestinian children. These records are associated with human experiences and reveal the systematic efforts of the British Mandate to control and regulate Palestinian society and everyday living. These materials are often buried within broader collections related to colonial governance or Middle Eastern studies, making them difficult to identify or extract. ",
  "The project will systematically survey over 42 archival databases, including collections from national archives, university libraries, governmental institutions, and historical societies. To date, over 3000 materials have been downloaded, primarily in English, but with plans to include more materials in Arabic and Hebrew. Many key documents are in Arabic and Hebrew, reflecting the multi-lingual context of the period. Some of these documents are already available online with links to documents; others have links but no access to documents without payments. This presents a significant research opportunity for future collections and adds to the richness of the materials that will be integrated into the archive.",
  "The eventual goal is to build a digital repository collection of human experience records of Palestinian childhood during the British mandate that is accessible to scholars, educators, and activists, as well as to international researchers. This would ensure these vital records are available for ongoing study, analysis, and reflection.",
];

const documents = [
  {
    label:
      "Folio 586-596: Admission of young Palestinians to non-British military schools: transmits a petition from Mr...Held by: The National Archives, Kew - Colonial Office, Commonwealth and Foreign and Commonwealth Offices CO 733/68/42 09 June 1924",
    link: "https://discovery.nationalarchives.gov.uk/details/r/C17162489",
  },
  {
    label:
      "Folios 214-234: Exemption from examination of students holding a diploma of an Ottoman or Syrian...Held by:  The National Archives, Kew - Colonial Office, Commonwealth and Foreign and Commonwealth Offices CO 733/104/25 08 August 1925",
    link: "https://discovery.nationalarchives.gov.uk/details/r/C17236873",
  },
  {
    label:
      "Folios 195-197: Mr E H Bauman [Bowman], Director of Education in Palestine: appeal for his...Held by:  The National Archives, Kew - Colonial Office, Commonwealth and Foreign and Commonwealth Offices CO 733/16/15 14 June 1921",
    link: "https://discovery.nationalarchives.gov.uk/details/r/C16836639",
  },
  {
    label:
      "Report on the Activities of the Arab Office, Washington, for the First Six Months Beginning Nov.1.1945 (Excerpts)",
    link: "",
  },
  {
    label: "Porte de Jaffa à Jérusalem",
    link: "",
  },
  {
    label: "The Civil and Religious Courts (Judgment) Ordinance",
    link: "",
  },
  {
    label:
      "Album belonging to Henry Richard Radcliffe-Cox [Radcliffe Cock], 1942 - 1944",
    link: "https://archives.bristol.gov.uk/records/40205/PH/4",
  },
];

const ChildhoodRecords: FC = () => {
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
            Records of Human Experiences
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

          <Box sx={{ my: 2 }}>
            <Typography
              variant="h4"
              component="h5"
              sx={{ color: "text.primary", marginBottom: 2 }}
              gutterBottom
            >
              Archival Documents Examples:
            </Typography>
            <List>
              {documents.map((d) => (
                <ListItem>
                  <Link to={d.link || "#"} target="_blank">
                    <Typography color="textSecondary">{d.label}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ChildhoodRecords;
