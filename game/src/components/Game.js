import {memo} from "react";

const Game = ()=>{
    return (
        <>
            <label>Make your guess:</label><br/>
            <input type="text"/><br/>
            <button>Make Guess</button>
        </>
    )
}

export default memo(Game);