import { Link } from 'react-router-dom'
import Battle from './Battle'

function Assemble(props){
    // console.log(props)
    let availableShips = props.ships.map(ship => {
        return <li id={ship.name} onClick={props.addShip}>{ship.name}</li>
    })
    return(
        <div>
            <Link to="/battle">Begin Battle!</Link>
            <ul>{availableShips}</ul>
        </div>
    )
}

export default Assemble