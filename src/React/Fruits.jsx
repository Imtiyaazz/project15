import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const Fruits = () => {
  const dispatch = useDispatch();
  const fruitsSelect = useSelector((state) => state.greetingReducer.fruits);
  console.log("redux data", fruitsSelect);
  const fruit = ["orange", "kiwi", "banana", "mango", "cherry"];

  const handleFruit = (str) => {
    const type = "ADDFRUIT";
    const payload = str;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <Grid container spacing={2} align="center">
        <Grid item xs={12}>
          <h1>{fruitsSelect}</h1>
        </Grid>
        {fruit.map((item) => (
          <Grid item xs={3}>
            <Card
              sx={{
                height: 150,
                bgcolor: "lightsteelblue",
                textAlign: "center",
              }}
            >
              <CardContent>
                <h1>{item}</h1>
                <Button onClick={() => handleFruit(item)} variant="contained">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
