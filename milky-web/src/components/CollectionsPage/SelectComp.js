import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SelectComp = () => {
  return (
    <Box sx={{ mx: "12.8%" }}>
      <Grid container direction='row'>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 187 }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Filter by Collection
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            label='Age'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 187 }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Filter by Artist
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            label='Age'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 187 }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Filter by Artwork
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            label='Age'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 187 }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Filter by Price
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            label='Age'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default SelectComp;
