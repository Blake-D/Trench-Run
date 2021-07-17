function Attackers(props) {
    console.log(props)
    return (
        <div>
            <h1>Attackers</h1>
            <div>
                {props.ships.map(ship => {
                    if(ship.role === "Attacker"){
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

export default Attackers