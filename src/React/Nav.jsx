import React from "react";
import { Card, Grid, CardContent, Button } from "@mui/material";
import { navdata } from ".";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Card sx={{ bgcolor: "lightblue" }}>
      <CardContent>
        <Grid container spacing={2}>
          {navdata.map((item) => (
            <Grid item xs={2}>
              <Link to={item.path}>
                <Button fullWidth variant="contained" color="secondary">
                  {item.title}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
