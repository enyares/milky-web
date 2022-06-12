import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/HomePage/Banner";
import BigCard from "../components/HomePage/BigCard";
import Title from "../components/Title/Title";

const homePage = () => {
  return (
    <>
      <Banner />
      <Title title="Upcoming Drops" fontSize="40px" />
      <BigCard />
      <Title title="Contact us" fontSize="48px" button />
    </>
  );
};

export default homePage;
