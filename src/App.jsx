import { useEffect, useState } from "react";
import Gamebody from "./components/Gamebody";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VictoryMessage from "./components/VictoryMessage";
import Error from "./components/Error";

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const [victory, setVictory] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("highScore")) {
      setHighScore(Number(localStorage.getItem("highScore")));
    }
  }, []);

  function changeScore(val) {
    setScore(val);
  }

  function changeHighScore(val) {
    setHighScore(val);
  }

  function changeVictory(val) {
    setVictory(val);
  }

  function changeError(val) {
    setError(val);
  }

  return (
    <div className="bg-fuchsia-400">
      <Header score={score} highscore={highscore} />
      <Gamebody
        score={score}
        highScore={highscore}
        changeScore={changeScore}
        changeHighScore={changeHighScore}
        changeVictory={changeVictory}
        changeError={changeError}
      />
      <Footer />
      {error ? <Error /> : ""}
      {victory ? <VictoryMessage /> : ""}
    </div>
  );
}

export default App;
