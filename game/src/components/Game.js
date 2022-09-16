import { memo, useEffect } from "react";
import style from "../css/game.module.css";
import { useState } from "react";
import { getStatus } from "../helperFunctions/Game";
import { useSelector, useDispatch } from "react-redux";
import { guessNumber, resetGame } from "../redux/reducers/gameReducer";

const Game = ({ showSetting }) => {
  const [txt, setTxt] = useState("");
  const status = useSelector((state) => state.game.status);
  const lowerValue = useSelector((state) => state.game.lowerBound);
  const upperValue = useSelector((state) => state.game.upperBound);
  const lastGuess = useSelector((state) => state.game.lastGuess);
  const guessValue = useSelector((state) => state.game.guessValue);
  const trial = useSelector((state) => state.game.trial);
  const isDone = useSelector((state) => state.game.isDone);
  const point = useSelector((state) => state.game.point);
  const [btnText, setBtnText] = useState("Make Guess");

  useEffect(() => {
    if (isDone) setBtnText("Play Again");
    else setBtnText("Make Guess");
  }, [isDone]);

  const dispatch = useDispatch();

  console.log("good");
  return (
    <div className={style.content}>
      <div>
        <div className={style.contentHeader}>
          <span>Guess Game</span>
          <button onClick={showSetting}>Game Setting</button>
        </div>
        <div className={style.contentBody}>
          <label className={style.point}>Points: {point}</label>
          <label className={style.label}>
            Guess the number between <span>{lowerValue}</span> and{" "}
            <span>{upperValue}</span>
          </label>
          <br />
          <label className={style.label}>
            Last Guess: <span>{lastGuess}</span>
          </label>
          <br />
          <label className={style.label}>
            Trial Count: <span>{trial}</span>
          </label>
          <br />
          <label className={style.label}>{status}</label>
          <br />
          <label>Make your guess:</label>
          <br />
          <input
            onInput={(e) => setTxt(e.target.value)}
            type="number"
            placeholder="Enter your guess here"
          />
          <br />
          <button
            onClick={() => {
              if (!isDone)
                dispatch(
                  guessNumber({
                    lastGuess: txt,
                    status: getStatus(txt, guessValue)
                  })
                );
              else dispatch(resetGame());
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Game);
