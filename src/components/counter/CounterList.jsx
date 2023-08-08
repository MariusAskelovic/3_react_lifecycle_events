import Grid from "../UI/Grid"
import Counter from "./Counter"

function CounterList() {
    return (
        <Grid cols='3'>
            <Counter />
            <Counter />
            <Counter />
        </Grid>
    )


}

export default CounterList