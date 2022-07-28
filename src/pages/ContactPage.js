import { Box, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import ContactComp from "../components/ContactPage/ContactComp";
import Title from "../components/Title/Title";
import TitleCenter from "../components/Title/TitleCenter";
import ButtonReal from "../components/Widget/ButtonReal";

// const [name, setName] = useState({
//   buttonText: "Next Step",
//   fieldLabel: "Name & Surname",
// });
const ContactPage = () => {
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  return (
    <Box sx={{ mt: 3 }}>
      {open2 && (
        <>
          <Title title='Hello!' fontSize='110px' />
          <ContactComp
            buttonText='Next Step'
            onClickComp={() => {
              setOpen3(true);
              setOpen2(false);
            }}
            fieldLabel='Name & Surname'
          />
        </>
      )}
      {open3 && (
        <>
          <Title title='Hello!' fontSize='110px' />
          <ContactComp
            buttonText='Next Step'
            onClickComp={() => {
              setOpen4(true);
              setOpen3(false);
            }}
            fieldLabel='E-mail Address'
          />
        </>
      )}
      {open4 && (
        <>
          <Title title='Hello!' fontSize='110px' />
          <ContactComp
            buttonText='Next Step'
            onClickComp={() => {
              setOpen5(true);
              setOpen4(false);
            }}
            fieldLabel='Please include any details that will helps us '
            fs='40px'
          />
        </>
      )}
      {open5 && (
        <>
          <Title title='Hello!' fontSize='110px' />
          <Title subTitle='You can add social accounts (optional)' />
          <ContactComp
            buttonText='Submit'
            onClickComp={() => {
              setOpen6(true);
              setOpen5(false);
            }}
            detail
          />
        </>
      )}
      {open6 && (
        <>
          <List>
            <ListItem sx={{ justifyContent: "center", py: "3%" }}>
              <TitleCenter
                title='We will contact you soon'
                fontSize='72px'
                subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies vitae adipiscing convallis nibh pretium. Vel mus consequat quis.'
              />
            </ListItem>
            <ListItem sx={{ justifyContent: "center", py: "5%" }}>
              <ButtonReal
                text='Back to hompage'
                href='/'
                // width='20%'
                height='50px'
                backgroundColor='black'
                color='white'
              />
            </ListItem>
          </List>
        </>
      )}
    </Box>
  );
};

export default ContactPage;
