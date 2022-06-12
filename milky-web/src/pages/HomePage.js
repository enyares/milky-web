import React from "react";
import SelectComp from "../components/CollectionsPage/SelectComp";

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
      <SelectComp />
    </>
  );
};

export default homePage;
