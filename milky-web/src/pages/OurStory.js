import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TeamCard from "../components/OurStory/TeamCard";
import TextComp from "../components/OurStory/TextComp";
import Title from "../components/Title/Title";
import melkan from "../assets/img/melkan.jpeg";
import natali from "../assets/img/natali.jpeg";
import muge from "../assets/img/muge.jpeg";
import mustafa from "../assets/img/mustafa.jpeg";
import Footer from "../components/Footer/Footer";

const array = [
  {
    img: melkan,
    personName: "Melkan Gürsel",
    personTitle: "Co-founder",
    profileLink: "www.linkedin.com/company/tabanlioglu-architects",
    profileLinks: "https://twitter.com/TabanliogluNews",
  },
  {
    img: natali,
    personName: "Natali Araz",
    personTitle: "Co-founder",
    profileLink: "http://linkedin.com/in/natali-fulya-araz-73178220b",
    profileLinks: "https://twitter.com/nataliarazz",
  },
  {
    img: muge,
    personName: "Müge Çubukçu",
    personTitle: "Co-founder",
  },
  {
    img: mustafa,
    personName: "Mustafa Tatlıcı",
    personTitle: "Co-founder",
  },
];
const OurStory = () => {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Title title='Our Story' fontSize='96px' />
        <TextComp />
        <Box sx={{ px: "3%" }}>
          <Grid
            container
            sx={{
              borderRadius: 2,
              backgroundColor: "black",
              height: "100%",
            }}
          >
            <Grid
              item
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              sx={{ p: 10 }}
              xs={12}
              sm={12}
            >
              <Typography
                sx={{
                  fontFamily: "recoleta",
                  fontSize: "40px",
                  color: "white",
                }}
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
            <Grid item container xs={12} sm={12} sx={{ p: 4 }}>
              {array.map((item, index) => (
                <Grid item sm={6} md={4} xs={12} sx={{ px: 5 }}>
                  <TeamCard item={item} showLinkedinIcon={true} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OurStory;
