import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonReal from "../Widget/ButtonReal";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const ContactComp = (props) => {
  const {
    buttonText = "",
    fieldLabel = "",
    onClickComp,
    fs = "64px",
    detail = false,
  } = props;

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      sx={{
        px: "13%",
        py: "3%",
      }}
    >
      {detail ? (
        <>
          <Grid item sm={4} xs={12}>
            <TextField
              sx={{ width: "80%", color: "lightgrey" }}
              id='standard-basic'
              label='Linkedin  address'
              variant='standard'
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20, opacity: 0.4 } }} // font size of input label
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              sx={{ width: "80%", color: "lightgrey" }}
              id='standard-basic'
              label='Twitter address'
              variant='standard'
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20, opacity: 0.4 } }} // font size of input label
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <TwitterIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              sx={{ width: "80%", color: "lightgrey" }}
              id='standard-basic'
              label='Intragram address'
              variant='standard'
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20, opacity: 0.4 } }} // font size of input label
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <InstagramIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <ListItem sx={{ justifyContent: "center", mt: 13 }}>
            <ButtonReal
              text={buttonText}
              onClick={onClickComp}
              width='fit-content'
              height='50px'
              border='black'
            />
          </ListItem>
        </>
      ) : (
        <Grid item sm={12} justifyContent='center'>
          <List>
            <ListItem sx={{ justifyContent: "center" }}>
              <TextField
                sx={{ width: "80%", color: "lightgrey", height: "200%" }}
                id='standard-basic'
                label={fieldLabel}
                variant='standard'
                inputProps={{ style: { fontSize: 60 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: fs, opacity: 0.4 } }} // font size of input label
              />
            </ListItem>
            <ListItem sx={{ justifyContent: "center", mt: 13 }}>
              <ButtonReal
                text={buttonText}
                onClick={onClickComp}
                width='fit-content'
                height='50px'
                border='black'
              />
            </ListItem>
          </List>
        </Grid>
      )}
    </Grid>
  );
};

export default ContactComp;
