import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Select from "../components/CollectionsPage/Select";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutView from "../components/HomePage/AboutView";
import Banner from "../components/HomePage/Banner";
import BigCard from "../components/HomePage/BigCard";
import Title from "../components/Title/Title";

const homePage = () => {
  return (
    <>
      <Banner />
      <Title title='Upcoming Collection' fontSize='40px' />
      <BigCard />
      <AboutView />
      <Title title='Collections' fontSize='48px' />
      <Select />
    </>
  );
};

export default homePage;
