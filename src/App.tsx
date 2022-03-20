import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/Button";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <h4>hello</h4>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button disabled>disabled</Button>
    </div>
  );
}

export default App;
