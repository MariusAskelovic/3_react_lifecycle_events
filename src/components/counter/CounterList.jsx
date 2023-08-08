import Grid from "../UI/Grid"
import Counter from "./Counter"

function CounterList() {
    return (
        <Grid cols='3'>
            <Counter what='Pullups' />
            <Counter what='Km ran' />
            <Counter what={0} />
        </Grid>
    )


}

export default CounterList