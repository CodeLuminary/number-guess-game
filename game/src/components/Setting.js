import { memo, useState} from "react";
import style from "../css/setting.module.css";
import {randomInteger} from "../helperFunctions/Game";
import {useDispatch} from "react-redux";
import {setGame} from "../redux/reducers/gameReducer"

const Setting = ({ shouldShow, closeSetting }) => {
  const dispatch = useDispatch();
  const [lowerValue, setLowerValue] = useState(1);
  const [upperValue, setUpperValue] = useState(10);
  console.log("great");
  return (
    <div
      style={{ display: shouldShow ? `flex` : `none` }}
      className={style.content}
    >
      <div>
        <button onClick={closeSetting} className={style.cancel}>
          X
        </button>
        <label>Set the lower & upper limit of the guess number</label><br/><br/>
        <label>Lower</label>
        <br />
        <input onInput={e=>setLowerValue(Number(e.target.value))} type="number" placeholder="Enter lower limit"/>
        <br />
        <label>Upper</label>
        <br />
        <input onInput={e=>setUpperValue(Number(e.target.value))} type="number" placeholder="Enter upper limit"/>
        <button onClick={()=>{dispatch(setGame({
          guessValue: randomInteger(lowerValue, upperValue),
          lowerBound: lowerValue,
          upperBound: upperValue
        }));
        alert("Settings saved successfully")}} className={style.reset}>Reset</button>
      </div>
    </div>
  );
};

export default memo(Setting);
