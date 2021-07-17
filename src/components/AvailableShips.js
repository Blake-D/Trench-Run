function AvailableShips(props) {
    console.log(props)
    return (
        <div>
            {props.ships.map(ship => (
                <img
                    src={`https://swgoh.gg/${ship.image}`}
                    id={[ship.name, `https://swgoh.gg/${ship.image}`, ship.role, ship.power]}
                    onClick={props.addShip}
                />
            ))}
        </div>
    )
}

export default AvailableShips