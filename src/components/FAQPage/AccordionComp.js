import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
const AccordionComp = (props) => {
  const { question = "", answer = "" } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ px: "10.6%", py: "1%" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <CloseIcon
                sx={{
                  color: "black",
                  fontSize: "200%",
                }}
              />
            ) : (
              <AddIcon
                sx={{
                  color: "black",
                  fontSize: "200%",
                }}
              />
            )
          }
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='subtitle1'>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2' sx={{ color: "gray" }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
    </>
  );
};

export default AccordionComp;
