import React from "react";
import { Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const Greeting = () => {
  const dispatch = useDispatch();

  const handleGreet = (str) => {
    const type = "GREETING";
    const payload = str;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => handleGreet("Good Afternoon")}
          >
            Good Afternoon
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => handleGreet("Good Evening")}
          >
            Good Evening
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => handleGreet("Good Night")}
          >
            Good Evening
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
