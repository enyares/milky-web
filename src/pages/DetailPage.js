import { Divider } from "@mui/material";
import React from "react";
import BlackCard from "../components/DetailPage/BlackCard";
import DetailCard from "../components/DetailPage/DetailCard";
import DetailHeader from "../components/DetailPage/DetailHeader";
import Title from "../components/Title/Title";

const DetailPage = () => {
  console.log("first");
  return (
    <div>
      <DetailHeader />
      <BlackCard />
      <DetailCard />
      <Divider sx={{ py: 3 }} />
      <Title title='Contact us' fontSize='48px' button fontFamily='santral' />
    </div>
  );
};

export default DetailPage;
