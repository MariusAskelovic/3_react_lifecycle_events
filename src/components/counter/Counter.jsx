import Grid from "../UI/Grid";
import { useState } from 'react';

function Counter() {
    console.log('<Counter generated />');
    const [countNum, setCountNum] = useState(0);
    function goUp() {
        setCountNum(countNum + 1)
    }
    function goDown() {
        setCountNum(countNum - 1)
    }
    function reset() {
        setCountNum(0)
    }

    return (
        <div className="counter">
            <h2>Label</h2>
            <p className="counterValue">{countNum}</p>
            <Grid cols='3'>
                <button onClick={goUp}>UP</button>
                <button onClick={goDown}>DOWN</button>
                <button onClick={reset}>Reset</button>
            </Grid>
        </div>
    )
}

export default Counter