import { Box, Grid } from "@mui/material";
import React from "react";
import CollectionComp from "../components/CollectionsPage/CollectionComp";
import SelectComp from "../components/CollectionsPage/SelectComp";
import Title from "../components/Title/Title";
import Photo from "../assets/img/Photo.png";
import Photo2 from "../assets/img/Photo2.png";
import Photo3 from "../assets/img/Photo3.png";
import Photo4 from "../assets/img/Photo4.png";

const array = [
  { img: Photo },
  { img: Photo2 },
  { img: Photo3 },
  { img: Photo4 },
];

const CollectionsPage = () => {
  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Title title='Upcoming Collection' fontSize='40px' />
        <Title title='Upcoming Collection' fontSize='40px' />

        <SelectComp />
        <Grid container>
          {array.map((item, index) => {
            console.log("item", item);
            return <CollectionComp item={item} />;
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CollectionsPage;
