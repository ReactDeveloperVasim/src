import { Grid, TextField, Button } from "@mui/material";
import React from "react";

export const GridItem = () => {
  const [data, setData] = useState();
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField onChange={(e) => setData(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth sx={{ height: "53px" }}>
          {" "}
          submit
        </Button>
      </Grid>

      <h1>gnjkn</h1>
    </Grid>
  );
};
