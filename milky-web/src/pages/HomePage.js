import { Grid } from "@mui/material";
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
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
        <Banner />
        <Title title="Upcoming Collection" fontSize="40px" />
        <BigCard />
        <AboutView />
      </Box>
    </>
  );
};

export default homePage;
