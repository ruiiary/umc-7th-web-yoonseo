import { useState } from "react";
import "./App.css";
import CustomButton from "./components/custom-button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomButton/>
    </>
  );
}

export default App;
