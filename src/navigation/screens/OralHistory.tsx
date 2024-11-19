import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  useTheme,
  Paper,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const interviews = [
  {
    id: 1,
    title: "Interview with Palestinian Elder",
    location: "West Bank",
    year: 2022,
    audioUrl: "/path/to/audio1.mp3",
    transcript: `The majority of interviews were conducted in Arabic, with some participants—particularly those in the diaspora—initially preferring English. However, after a few minutes of conversation, many switched back to Arabic, which was embedded in emotional expressiveness, contrary to an emotional distance within speaking English.`,
  },
  {
    id: 2,
    title: "Childhood Memories from Gaza",
    location: "Gaza",
    year: 2023,
    audioUrl: "/path/to/audio2.mp3",
    transcript: `Since the inception of this project, the collection of individual oral histories has been broad and inclusive, aiming to represent the diversity of Palestinian experiences. Participants have been drawn from various geographic locations and backgrounds, including The West Bank, Gaza, Palestinians in Israel, Palestinian refugees in Lebanon and Jordan, and the Palestinian diaspora in countries like the United States and Canada.`,
  },
  {
    id: 3,
    title: "Diaspora Stories",
    location: "Michigan, USA",
    year: 2024,
    audioUrl: "/path/to/audio3.mp3",
    transcript: `The participants reflect the geographical and cultural diversity, ensuring that the project captures the variety of experiences and contexts that shaped Palestinian childhoods during the British Mandate, from urban to rural and Bedouin communities.`,
  },
];

const paragraphs = [
  "Individual oral history components are an essential pillar of the Palestinian Childhood Archive, offering a deeply personal and invaluable testimony of the lived experiences of Palestinian children during the British Mandate. Oral history captures personal perspectives that offer a human dimension to historical events and decisions that impacted Palestinian society. Individual oral histories provide rich, nuanced narratives often missing from traditional historical records or institutional archives. These personal accounts are crucial in documenting the day-to-day lives of children—encompassing everything from customs, community rituals, play, food, education, and family interactions—to offer a fuller understanding of Palestinian childhood under colonial rule. The participants are predominantly 83 years old or older and are part of the last generation who directly experienced part of their childhood during the British Mandate period. Their testimonies are especially urgent given the advanced age of the interviewees and the dwindling number of people who directly experienced the British Mandate, making the project critical as the opportunity to preserve their unique perspectives diminishes. The archive, therefore, serves not only as a historical documentation project but also as an urgent cultural preservation effort to safeguard the memories of those who lived through a transformative period in Palestinian history.  ",
  "Since the inception of this project, the collection of individual oral histories has been broad and inclusive, aiming to represent the diversity of Palestinian experiences. Participants have been drawn from various geographic locations and backgrounds, including The West Bank, Gaza, Palestinians in Israel, Palestinian refugees in Lebanon and Jordan, and the Palestinian diaspora in countries like the United States and Canada. The participants reflect the geographical and cultural diversity, ensuring that the project captures the variety of experiences and contexts that shaped Palestinian childhoods during the British Mandate, from urban to rural and Bedouin communities; therefore, influenced by geographic location, family structure, education, and access to resources. Some individuals interviewed had access to formal education, while others had limited or no formal schooling. This socioeconomic diversity provides a complete understanding of how the broader colonial environment rendered childhood. ",
  "Extensive effort was put into collecting individual oral histories. Interviews have been conducted both in-person and through remote platforms like Zoom, accommodating the challenges of reaching Palestinian refugees and diaspora communities across the globe. In 2022, there were 22 in-person interviews conducted in the West Bank, with an additional 20 in-person interviews conducted in the summer of 2023 across various locations in the West Bank and Israel, including rural villages and with Palestinians living in Israel. In the summer of 2024, more than 45 interviews were conducted in the United States and Jordan, with participants from states such as Michigan, California, Ohio, Texas, Virginia, and Chicago. These interviews were a mix of in-person and virtual (via Zoom) conversations, broadening the project's scope to include the Palestinian diaspora.",
  "The majority of interviews were conducted in Arabic, with some participants—particularly those in the diaspora—initially preferring English. However, after a few minutes of conversation, many switched back to Arabic, which was embedded in emotional expressiveness, contrary to an emotional distance within speaking English. Therefore, the lived experience of childhood is deeply tied to the language and, by default, culture. This linguistic preference underscores the emotional significance of the childhood experience and its connection to Palestinian culture. ",
  "The individual oral history component of the Palestinian Childhood Archive is integral to documenting the diverse, personal experiences of Palestinian children under the British Mandate. These individual accounts, which span different regions and backgrounds, offer historical nuances often overlooked in conventional archives or literature. By capturing these first-hand testimonies, the archive not only preserves the memories of an entire generation but also challenges existing stereotypes and colonial narratives. The project is an invaluable resource for researchers, educators, and future generations, offering a comprehensive understanding of how Palestinian childhood was shaped by colonialism, culture, and community. ",
];

const AudioPlayer = ({ audioUrl, title, location, year, transcript }) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const theme = useTheme();

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {location} • {year}
            </Typography>
          </Grid>
          <Grid item>
            <ReactAudioPlayer src={audioUrl} autoPlay controls />
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => setShowTranscript(!showTranscript)}
              sx={{ transform: showTranscript ? "rotate(180deg)" : "none" }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Collapse in={showTranscript}>
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Transcript
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                backgroundColor: theme.palette.grey[50],
                maxHeight: "200px",
                overflow: "auto",
              }}
            >
              <Typography variant="body2">{transcript}</Typography>
            </Paper>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const OralHistory = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.dark", color: "white", py: 8 }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Individual Oral Histories
          </Typography>
          <Typography variant="h6">
            Personal testimonies offering unique insights into the day-to-day
            realities and culture of Palestinian children during the British
            Mandate.
          </Typography>
        </Container>
      </Box>

      {/* Description Section */}
      <Box sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container>
          {paragraphs.map((p) => (
            <Typography sx={{ color: "text.secondary", marginBottom: 2 }}>
              {p}
            </Typography>
          ))}
        </Container>
      </Box>

      {/* Audio Players Section */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Oral History Recordings
          </Typography>
          <Box sx={{ mt: 4 }}>
            {interviews.map((interview) => (
              <AudioPlayer
                key={interview.id}
                audioUrl={interview.audioUrl}
                title={interview.title}
                location={interview.location}
                year={interview.year}
                transcript={interview.transcript}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default OralHistory;
