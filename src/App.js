import React from "react";
import Paper from "./components/Paper";
import { Grid, Cell } from "./components/GridLayout";
import { TestInput, TestInput2, TestInput3 } from "./components/Test";

function App() {
  return (
    <div className="App">
      <Paper>
        <Grid
          row={5}
          col={6}
        >
          <Cell
            row={1}
            rowspan={1}
            col={1}
            colspan={2}
          >
            <TestInput />
          </Cell>
          <Cell
            row={1}
            rowspan={2}
            col={3}
            colspan={3}
          >
            <TestInput2 />
          </Cell>
          <Cell
            row={2}
            rowspan={2}
            col={1}
            colspan={2}
          >
            <TestInput3 />
          </Cell>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
