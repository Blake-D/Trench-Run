function Capitals(props) {
    console.log(props)
    return (
        <div>
            <h1>Capital Ships</h1>
            <div>
                {props.ships.map(ship => {
                    if(ship.role === "Capital Ship"){
                        return (
                            <img
                                className="ship-option"
                                src={`https://swgoh.gg/${ship.image}`}
                                id={[ship.name, `https://swgoh.gg/${ship.image}`, ship.role, ship.power]}
                                onClick={props.addShip}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Capitals