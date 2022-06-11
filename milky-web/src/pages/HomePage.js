import React from "react";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";

const homePage = () => {
  return (
    <>
      <Header />
      <Title
        title="Featured NFT's"
        button
        subTitle='Visit Collections'
        fontSize='40px'
      />
    </>
  );
};

export default homePage;
