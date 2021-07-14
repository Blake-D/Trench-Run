function Assemble(props){
    // console.log(props)
    let availableShips = props.ships.map((ship, i) => {
        return <li id={ship.name} onClick={props.addShip}>{ship.name}</li>
    })
    return(
        <div>
            <ul>{availableShips}</ul>
        </div>
    )
}

export default Assemble