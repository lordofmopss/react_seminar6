import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/styles.scss";

const ArticleAccordion = ({ title, content, isOdd }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Accordion
            className={`article-accordion ${isOdd ? "odd" : "even"} ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="article-content">{content}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default ArticleAccordion;
