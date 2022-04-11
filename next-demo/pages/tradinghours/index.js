import React from 'react'
import link from 'next/link'
import Link from 'next/link'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import logo from "./logo.svg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const index = () => {
  return (
    <div style={{ marginTop: "90px", textAlign: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={14}>
            <img
              src={
                "https://www.hungryjacks.com.au/App_Themes/HJ/assets/images/HJLogo.svg"
              }
              className="App-logo"
              alt="logo"
            />
          </Grid>
          <Grid item xs={14}>
            <h1> Click the button below:</h1>
          </Grid>
          <div></div>
        </Grid>
      </Box>
      <div  style={{textAlign:"center"}}>
            
      <Box
        sx={{ flexGrow: 1 }}
      
      >
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Button variant="outlined" disableElevation>
              <Link href="/"> Back to Home Page</Link>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="success">
              <Link href="/tradinghours/tradingData">View Data Source</Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
        </div>
    </div>
  );
}

export default index
