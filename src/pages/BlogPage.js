import { Grid } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogPage/BlogCard";
import BlogComp from "../components/BlogPage/BlogComp";
import CompBlog from "../components/BlogPage/CompBlog";
import BigTitle from "../components/Title/BigTitle";
import Title from "../components/Title/Title";
const BlogPage = () => {
  const array = [
    {
      date: "February 27",
      title: "Material Art to Crypto Art: An Overview of NFTs",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus  magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      tabs: "NFT",
      tabs2: " Technlogy",
      tabs3: "Metaverse",
    },
    {
      date: "February 27",
      title: "Material Art to Crypto Art: An Overview of NFTs",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus  magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      tabs: "NFT",
      tabs2: " Technlogy",
      tabs3: "Metaverse",
    },
    {
      date: "February 27",
      title: "Material Art to Crypto Art: An Overview of NFTs",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus  magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      tabs: "NFT",
      tabs2: " Technlogy",
      tabs3: "Metaverse",
    },
    {
      date: "February 27",
      title: "Material Art to Crypto Art: An Overview of NFTs",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus  magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      tabs: "NFT",
      tabs2: " Technlogy",
      tabs3: "Metaverse",
    },
    {
      date: "February 27",
      title: "Material Art to Crypto Art: An Overview of NFTs",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus  magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      tabs: "NFT",
      tabs2: " Technlogy",
      tabs3: "Metaverse",
    },
    {
      date: "February 27",
      title: "Material Art to Crypto Art: An Overview of NFTs",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu faucibus  magna vitae eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      tabs: "NFT",
      tabs2: " Technlogy",
      tabs3: "Metaverse",
    },
  ];
  return (
    <>
      <Title
        title='Drop an anchor and take a moment to reflect on the voyage.'
        fontSize='96px'
        mt='6%'
      />
      <BlogComp />
      <CompBlog />
      <BigTitle />
      <Grid container spacing={3} sx={{ px: "10%", py: "5%" }}>
        {array.map((item, index) => {
          return (
            <Grid item sx={4} xs={12} md={4}>
              <BlogCard
                item={item}
                date={item.date}
                title={item.title}
                text={item.text}
                tabs={item.tabs}
                tabs2={item.tabs2}
                tabs3={item.tabs3}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default BlogPage;
