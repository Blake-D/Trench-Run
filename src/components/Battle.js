function Battle(props) {
    return (
        <div>
            {props.myShips.map(ship => (
                <img src={ship[1]} />
            ))}
        </div>
    )
}

export default Battle