import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";

export const Home = () => {
  const dispatch = useDispatch();
  const fruitsSelect = useSelector((state) => state.greetingReducer.fruits);

  const handleCat = (curr) => {
    const type = "SELECTED_CAT";
    const payload = curr;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <h1>{fruitsSelect}</h1>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCat("Women")}
        >
          Womens
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCat("Mens")}
        >
          Mens
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCat("Electronic")}
        >
          Electronic
        </Button>
      </Grid>
    </Grid>
  );
};
