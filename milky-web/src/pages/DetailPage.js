import React from "react";
import BlackCard from "../components/DetailPage/BlackCard";
import DetailCard from "../components/DetailPage/DetailCard";
import DetailHeader from "../components/DetailPage/DetailHeader";

const DetailPage = () => {
  console.log("first");
  return (
    <div>
      <DetailHeader />
      <BlackCard />
      <DetailCard />
    </div>
  );
};

export default DetailPage;
