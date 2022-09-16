import {memo} from "react";

const Setting = ()=>{
    return (
        <>
            <label>Lower</label><br/>
            <input type="text"/><br/>
            <label>Upper</label><br/>
            <input type="text"/>
            <button>Reset</button>
        </>
    )
}

export default memo(Setting);