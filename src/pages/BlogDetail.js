import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BlogLeftSide from "../components/BlogDetail/BlogLeftSide";
import BlogRightSide from "../components/BlogDetail/BlogRightSide";
import Title from "../components/Title/Title";

const BlogDetail = () => {
  return (
    <>
      <Title
        title='Material Art to Crypto Art: An Overview of NFTs'
        fontSize='80px'
        py='10%'
        textAlign='center'
      />
      <Divider sx={{ py: 3 }} />
      <Grid item sx={{ px: "11.5%", mt: "5%" }}>
        <Typography
          sx={{ fontFamily: "rocelata", fontSize: "16px", opacity: 0.6 }}
        >
          February 27
        </Typography>
      </Grid>
      <Grid container spacing={3} sx={{ px: "10%" }}>
        <Grid item xs={12} sm={8} md={8}>
          <BlogLeftSide />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <BlogRightSide />
        </Grid>
      </Grid>
    </>
  );
};

export default BlogDetail;
