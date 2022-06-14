import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function WaterBorneText({fontSize = '40px',lineHeight = '53.8px',color = 'white',styleProps= {pt: "96px", pb: "64px" }}) {
  return (
    <Grid container item sm={12} xs={12} sx={{ display:'flex',...styleProps }}>
    {/* <img
      src={require("../../assets/img/WATERBORNE X BY HUSSEIN CHALAYAN.png")}
    /> */}
    <Typography  sx={{
        fontFamily: "santral",
        fontSize,
        fontWeight: 600,
        lineHeight,
        color,
      }}>
    WATERBORNE
    </Typography>
    <Typography sx={{
        fontFamily: "santral",
        fontSize,
        fontWeight: 300,
        lineHeight,
        color: "#F1C1AC",
        mx:2,
      }}>
    X
    </Typography>
    <Typography sx={{
        fontFamily: "santral",
        fontSize,
        fontWeight: 400,
        lineHeight,
        color,
      }}>
    BY HUSSEIN CHALAYAN
    </Typography>
  </Grid>
  )
}
