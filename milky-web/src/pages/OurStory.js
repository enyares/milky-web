import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextComp from "../components/OurStory/TextComp";
import Title from "../components/Title/Title";

const OurStory = () => {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Title title='Our Story' fontSize='96px' />
        <TextComp />
        <Grid
          sx={{
            width: "1280px",
            height: "1610px",
            borderRadius: 2,
            backgroundColor: "black",
            position: "relative",
            mx: "12.8%",
          }}
        >
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            sx={{ p: 10 }}
          >
            <Typography
              sx={{ fontFamily: "recoleta", fontSize: "40px", color: "white" }}
            >
              The Team
            </Typography>
            <Typography
              sx={{
                fontFamily: "santral",
                fontSize: "24px",
                color: "white",
                py: 2,
              }}
            >
              Ultricies morbi fusce ullamcorper faucibus turpis luctus
              elementum. Ipsum, urna in elementum ridiculus vulputate ac
              facilisis non eu. Dolor neque, volutpat
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurStory;
