import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import React, { useEffect, useState } from "react";

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="App">
        {!started && <StartPage setStarted={setStarted} />}
        {started && <GamePage />}
    </div>
  );
}

export default App;
