function Assemble(props){
    console.log(props.ship)
    return(
        <div>
            {props.ships.map(ship => (
                <img src={`https://swgoh.gg/${ship.image}`} width="200" height="200"/>        
            ))}
        </div>
    )
}

export default Assemble