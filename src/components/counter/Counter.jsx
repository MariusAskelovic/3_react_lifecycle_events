import Grid from "../UI/Grid";
import { useState } from 'react';

function Counter(props) {
    console.log('<Counter generated />');
    const [countNum, setCountNum] = useState(0);
    function goUp() {
        setCountNum(countNum + 1)
    }
    function goDown() {
        if (countNum < 1) {
            return;
        }
        setCountNum(countNum - 1)
    }
    function reset() {
        setCountNum(0)
    }

    return (
        <div className="counter">
            {/* jei props.what nera tuscias, tada grazinam .what, kitaip 'Label' */}
            {/* <h2>{props.what ? props.what : 'Label'}</h2> */}
            {/* naujausias budas, veikia su 0 skaiciu */}
            <h2>{props.what ?? 'Label'}</h2>
            <p className="counterValue">{countNum}</p>
            <Grid cols='3'>
                <button onClick={goUp}>UP</button>
                {countNum > 0 &&
                    <button onClick={goDown}>DOWN</button>}
                <button disabled={countNum === 0} onClick={reset}>Reset</button>
            </Grid>
        </div>
    )
}

export default Counter