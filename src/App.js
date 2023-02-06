import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const filters = ["all", "completed", "notDone"];
  const [show, setShow] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <div>
        <Nav show={show} filters={filters} onClick={setShow} />
        <Body filtering={show} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
