import { useState, useEffect } from "react";
import _ from "lodash";
import Spinner from "./Spinner";

function Gamebody({
  score,
  changeScore,
  highScore,
  changeHighScore,
  changeVictory,
  changeError,
}) {
  const [apiData, setApiData] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://stand-by-me.herokuapp.com/api/v1/characters"
        );
        //   console.log("This is the response from the api", response);
        const data = await response.json();
        //   console.log("This is the data", data);
        const firstHundredCharacters = data.slice(0, 80);
        const shuffled = _.shuffle(firstHundredCharacters).slice(0, 24);
        // console.log("Fetching data!");
        setApiData(shuffled);
      } catch (err) {
        console.error(err);
        changeError(true);
      }
    }
    getData();
  }, []);

  function shuffleCards(e) {
    const cardId = e.target.closest(".card__class").id;
    if (clickedCards.includes(String(cardId))) {
      if (score > highScore) {
        changeHighScore(score);
        localStorage.setItem("highScore", JSON.stringify(score));
      }
      changeScore(0);
      setClickedCards([]);
    } else {
      if (score > highScore) {
        changeHighScore(score);
        localStorage.setItem("highScore", JSON.stringify(score));
      }
      changeScore(score + 1);
      setClickedCards([...clickedCards, cardId]);
    }
    const newlyShuffled = _.shuffle(apiData);
    setApiData(newlyShuffled);
  }

  useEffect(() => {
    if (score === 24) changeVictory(true);
  }, [score]);

  return (
    <div className="flex justify-center items-center  p-3 lg:p-5">
      {apiData.length === 0 ? <Spinner /> : ""}
      <ul className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-6 gap-7 min-w-full ">
        {apiData.map((character) => {
          return (
            <>
              <li
                className="card__class bg-pink-700 flex justify-center items-center flex-col rounded-xl hover:-translate-y-2 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.80)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.90)_0px_30px_90px]"
                key={character.name}
                onClick={shuffleCards}
                id={character.id}
              >
                <figure key={`${character.name}-figure`}>
                  <img
                    className="h-60 w-52"
                    src={`https://jojos-bizarre-api.netlify.app/assets/${character.image}`}
                    alt={character.name}
                    key={`${character.name}-image`}
                  />
                  <figcaption
                    className="hidden"
                    key={`${character.name}-caption`}
                  >
                    {character.name}
                  </figcaption>
                </figure>
                <p
                  key={`${character.name}-name`}
                  className="my-2 text-center uppercase font-mono font-anton tracking-wider
                [text-shadow:_-1px_1px_0_rgb(255_255_255)_,__1px_1px_0_rgb(255_255_255)_,__1px_-1px_0_rgb(255_255_255)_,__-1px_-1px_0_rgb(255_255_255)]
                "
                >
                  {character.name}
                </p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Gamebody;
