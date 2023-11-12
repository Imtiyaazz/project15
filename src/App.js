import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";
import { Landing } from "./React/Landing";
import { Card, CardContent } from "@mui/material";

function App() {
  const myStore = configStore();
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "aliceblue" }}>
        <h1 style={{ textAlign: "center" }}>REDUX</h1>
        <CardContent>
          <Provider store={myStore}>
            <Landing />
          </Provider>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;
