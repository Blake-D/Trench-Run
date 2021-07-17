import { Link } from 'react-router-dom'
import AvailableShips from './AvailableShips'
import MyShips from './MyShips'

function Assemble(props) {
    // console.log(props)
    let availableShips = props.ships.map(ship => {
        return (
            <li>
                <img
                    src={`https://swgoh.gg/${ship.image}`}
                    id={[ship.name, `https://swgoh.gg/${ship.image}`, ship.role, ship.power]}
                    onClick={props.addShip}
                /><br></br>
            </li>
        )
    })

    let myShips = props.myShips.map(ship => {
        return (
            <li>
                <img src={ship[1]} />
            </li>
        )
    })

    return (
        <div>
            <Link to="/battle">Begin Battle!</Link>
            <div style={{ display: "flex" }}>
                <AvailableShips availableShips={availableShips} />
                <MyShips myShips={myShips} clearFleet={props.clearFleet}/>
            </div>
        </div>
    )
}

export default Assemble