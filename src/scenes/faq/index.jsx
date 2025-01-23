import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the purpose of a Lead Qualification Bot in WhatsApp automation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Lead Qualification Bot identifies the nature of incoming leads and automatically assigns hot leads to the sales team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can WhatsApp automation enhance customer journeys?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          WhatsApp automation helps streamline customer interactions by identifying incoming leads and assigning them to the appropriate teams for follow-up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is Broadcast Automation, and how does it work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Broadcast Automation enables businesses to send messages to a large audience while simultaneously identifying and prioritizing hot leads for sales teams.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are drip campaigns, and how are they implemented through WhatsApp?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Drip campaigns use WhatsApp automation to send a series of scheduled messages, helping to engage leads over time and pass qualified leads to the sales team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How does WhatsApp automation handle renewal messages?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Automated Renewal Messages use WhatsApp to remind customers of upcoming renewals while categorizing and forwarding potential hot leads to the sales team.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
