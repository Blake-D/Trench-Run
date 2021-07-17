function MyShips(props) {
    return (
        <div>
            <button onClick={props.clearFleet}>Clear Fleet</button>
            {props.myShips.map(ship => (
                <img src={ship[1]} />
            ))}
        </div>
    )
}

export default MyShips