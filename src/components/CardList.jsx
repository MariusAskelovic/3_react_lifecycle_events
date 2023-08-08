import Card from './Card'
import Grid from './UI/Grid'

function CardList() {
    return (
        <Grid cols='4'>
            <Card heading='Html' text='Is the structure of web' />
            <Card heading='CSS' text='Is the style of web' />
            <Card heading='JS' text='Is the interactivity' />
        </Grid>
    )
}

export default CardList