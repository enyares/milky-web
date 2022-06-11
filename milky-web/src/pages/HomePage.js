import React from "react";
import Header from "../components/Header/Header";
import BigCard from "../components/HomePage/BigCard";
import Title from "../components/Title/Title";

const homePage = () => {
  return (
    <>
      <Title
        title="Featured NFT's"
        button
        subTitle="Visit Collections"
        fontSize="40px"
      />
      <BigCard />
    </>
  );
};

export default homePage;
