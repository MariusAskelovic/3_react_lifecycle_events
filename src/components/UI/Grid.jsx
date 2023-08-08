function Grid(props) {
    const cols = props.cols;
    const gridStyle = {
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
    }
    return (
        <div style={gridStyle} className="grid">{props.children}</div>
    )
}

export default Grid