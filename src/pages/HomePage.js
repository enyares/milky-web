import { Divider, Grid } from "@mui/material";
import React from "react";
import CollectionComp from "../components/CollectionsPage/CollectionComp";
import SelectComp from "../components/CollectionsPage/SelectComp";
import DetailHeader from "../components/DetailPage/DetailHeader";

import AboutView from "../components/HomePage/AboutView";
import Banner from "../components/HomePage/Banner";
import BigCard from "../components/HomePage/BigCard";
import Title from "../components/Title/Title";
import Photo from "../assets/img/Photo.png";
import { Box } from "@mui/system";
const homePage = () => {
  return (
    <>
      <Box>
        <Banner />
        <Title title='Upcoming Collection' fontSize='40px' />
        <BigCard />
        <AboutView />
        <Divider sx={{ py: 3 }} />
        <Title title='Contact us' fontSize='48px' button fontFamily='santral' />
      </Box>
    </>
  );
};

export default homePage;
