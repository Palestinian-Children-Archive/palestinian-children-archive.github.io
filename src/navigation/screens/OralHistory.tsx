import ReactAudioPlayer from "react-audio-player";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { SpeakerGroup } from "@mui/icons-material";
import audio1 from "../../assets/audio/July 1.2023 ابو ايمنRulkrum.wav";
import audio2 from "../../assets/audio/July15.2023شكري عارق وزوجته rose.wav";
import audio3 from "../../assets/audio/ام مازن ترشحه July 14, 2023.wav";
import audio4 from "../../assets/audio/Barak-Salman-July-20-2022.mp3";
import audio5 from "../../assets/audio/Jouad Albyra July4, 2022.mp3";
import audio6 from "../../assets/audio/July13.2022سلوي جفنا SalwaJefna.mp3";

const interviews = [
  {
    title: "July 1, 2023 ابو ايمن Rulkrum",
    location: "---",
    year: 2023,
    audioUrl: audio1,
  },
  {
    title: "July 15,2023 شكري عارق وزوجته rose",
    location: "---",
    year: 2023,
    audioUrl: audio2,
  },
  {
    title: "ام مازن ترشحه July 14, 2023.wav",
    location: "---",
    year: 2023,
    audioUrl: audio3,
  },
  {
    title: "July 20, 2022 برك سلمان",
    location: "---",
    year: 2022,
    audioUrl: audio4,
  },
  {
    title: "Jouad Albyra July 4, 2022",
    location: "---",
    year: 2022,
    audioUrl: audio5,
  },
  {
    title: "July 13, 2022 سلوي جفنا Salwa Jefna",
    location: "---",
    year: 2022,
    audioUrl: audio6,
  },
];

const paragraphs = [
  "Individual oral history components are an essential pillar of the Palestinian Childhood Archive, offering a deeply personal and invaluable testimony of the lived experiences of Palestinian children during the British Mandate. Oral history captures personal perspectives that offer a human dimension to historical events and decisions that impacted Palestinian society. Individual oral histories provide rich, nuanced narratives often missing from traditional historical records or institutional archives. These personal accounts are crucial in documenting the day-to-day lives of children—encompassing everything from customs, community rituals, play, food, education, and family interactions—to offer a fuller understanding of Palestinian childhood under colonial rule. The participants are predominantly 83 years old or older and are part of the last generation who directly experienced part of their childhood during the British Mandate period. Their testimonies are especially urgent given the advanced age of the interviewees and the dwindling number of people who directly experienced the British Mandate, making the project critical as the opportunity to preserve their unique perspectives diminishes. The archive, therefore, serves not only as a historical documentation project but also as an urgent cultural preservation effort to safeguard the memories of those who lived through a transformative period in Palestinian history.  ",
  "Since the inception of this project, the collection of individual oral histories has been broad and inclusive, aiming to represent the diversity of Palestinian experiences. Participants have been drawn from various geographic locations and backgrounds, including The West Bank, Gaza, Palestinians in Israel, Palestinian refugees in Lebanon and Jordan, and the Palestinian diaspora in countries like the United States and Canada. The participants reflect the geographical and cultural diversity, ensuring that the project captures the variety of experiences and contexts that shaped Palestinian childhoods during the British Mandate, from urban to rural and Bedouin communities; therefore, influenced by geographic location, family structure, education, and access to resources. Some individuals interviewed had access to formal education, while others had limited or no formal schooling. This socioeconomic diversity provides a complete understanding of how the broader colonial environment rendered childhood. ",
  "Extensive effort was put into collecting individual oral histories. Interviews have been conducted both in-person and through remote platforms like Zoom, accommodating the challenges of reaching Palestinian refugees and diaspora communities across the globe. In 2022, there were 22 in-person interviews conducted in the West Bank, with an additional 20 in-person interviews conducted in the summer of 2023 across various locations in the West Bank and Israel, including rural villages and with Palestinians living in Israel. In the summer of 2024, more than 45 interviews were conducted in the United States and Jordan, with participants from states such as Michigan, California, Ohio, Texas, Virginia, and Chicago. These interviews were a mix of in-person and virtual (via Zoom) conversations, broadening the project's scope to include the Palestinian diaspora.",
  "The majority of interviews were conducted in Arabic, with some participants—particularly those in the diaspora—initially preferring English. However, after a few minutes of conversation, many switched back to Arabic, which was embedded in emotional expressiveness, contrary to an emotional distance within speaking English. Therefore, the lived experience of childhood is deeply tied to the language and, by default, culture. This linguistic preference underscores the emotional significance of the childhood experience and its connection to Palestinian culture. ",
  "The individual oral history component of the Palestinian Childhood Archive is integral to documenting the diverse, personal experiences of Palestinian children under the British Mandate. These individual accounts, which span different regions and backgrounds, offer historical nuances often overlooked in conventional archives or literature. By capturing these first-hand testimonies, the archive not only preserves the memories of an entire generation but also challenges existing stereotypes and colonial narratives. The project is an invaluable resource for researchers, educators, and future generations, offering a comprehensive understanding of how Palestinian childhood was shaped by colonialism, culture, and community. ",
];

const AudioPlayer = ({ audioUrl, title, location, year }) => {
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
            <ReactAudioPlayer src={audioUrl} controls />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const OralHistory = () => {
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
          <SpeakerGroup sx={{ fontSize: "100px" }} />
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

      <Box sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container>
          {paragraphs.map((p, index) => (
            <Typography
              key={index}
              sx={{ color: "text.secondary", marginBottom: 2 }}
            >
              {p}
            </Typography>
          ))}
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Oral History Recordings
          </Typography>
          <Box sx={{ mt: 4 }}>
            {interviews.map((interview) => (
              <AudioPlayer
                key={interview.title}
                audioUrl={interview.audioUrl}
                title={interview.title}
                location={interview.location}
                year={interview.year}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default OralHistory;
