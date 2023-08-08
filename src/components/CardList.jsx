import Card from './Card'
import Grid from './UI/Grid'

const cardsData = [
    { id: 1, title: 'HTML', body: 'Is the structure of web' },
    { id: 2, title: 'CSS', body: 'Is the style of web' },
    { id: 3, title: 'JS', body: 'Is the interactivity' },
]

function CardList() {

    const cardListJsx = cardsData.map((cObj) => (
        <Card
            key={cObj.id}
            heading={cObj.title}
            text={cObj.body}
        />
    ))

    return (
        <Grid cols='3'>
            {/* VIENAS BUDAS */}
            {cardsData.map((cObj) => (
                <Card
                    key={cObj.id}
                    heading={cObj.title}
                    text={cObj.body}
                />
            ))}
            {/* KITAS BUDAS */}
            {cardListJsx}

            {/* <Card heading='CSS' text='Is the style of web' /> */}
            {/* <Card heading='JS' text='Is the interactivity' /> */}
        </Grid>
    )
}

export default CardList