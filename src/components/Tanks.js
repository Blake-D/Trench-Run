function Tanks(props) {
    console.log(props)
    return (
        <div>
            <h1>Tanks</h1>
            <div>
                {props.ships.map(ship => {
                    if(ship.role === "Tank"){
                        return (
                            <img
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

export default Tanks