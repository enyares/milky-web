import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/HomePage/Banner";
import BigCard from "../components/HomePage/BigCard";
import Title from "../components/Title/Title";

const homePage = () => {
  return (
    <>
      <Title
        title="Featured NFT's"
        detail
        subTitle='Visit Collections'
        fontSize='40px'
      />
      <Banner />
      <BigCard />
    </>
  );
};

export default homePage;
