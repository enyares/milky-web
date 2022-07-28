import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import CollectionComp from "../components/CollectionsPage/CollectionComp";
import SelectComp from "../components/CollectionsPage/SelectComp";
import Title from "../components/Title/Title";
import Photo from "../assets/img/Photo.png";
import Photo2 from "../assets/img/Photo2.png";
import Photo3 from "../assets/img/Photo3.png";
import Photo4 from "../assets/img/Photo4.png";
import { Link, useNavigate } from "react-router-dom";

const array = [
  { img: Photo },
  { img: Photo2 },
  { img: Photo3 },
  { img: Photo4 },
];

const CollectionsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };
  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Title mt='6%' title='Upcoming Collection' fontSize='40px' />

        <SelectComp />

        <Grid
          sx={{ mt: 4 }}
          justifyContent='space-around'
          container
          xs={12}
          sm={12}
          onClick={handleClick}
        >
          {array.map((item, index) => {
            console.log("item", item);
            return <CollectionComp item={item} index={index} />;
          })}
        </Grid>
        <Divider sx={{ py: 3 }} />
        <Title title='Contact us' fontSize='48px' button fontFamily='santral' />
      </Box>
    </>
  );
};

export default CollectionsPage;
