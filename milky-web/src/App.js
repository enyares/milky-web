import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid
      sx={{
        px: "12.8%",
      }}
    >
      <HomePage />
    </Grid>
  );
}

export default App;
