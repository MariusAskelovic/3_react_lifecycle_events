function Card(props) {
    const { heading, text } = props;
    return (
        <div className="card">
            <h3 className="cardTitle">{heading}</h3>
            <p className="cardText">{text}</p>
        </div>
    )
}

export default Card;