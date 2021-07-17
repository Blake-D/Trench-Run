import { Link } from 'react-router-dom'
import AvailableShips from './AvailableShips'
import MyShips from './MyShips'

function Assemble(props) {

    // let myShips = props.myShips.map(ship => {
    //     return (
    //         <li>
    //             <img src={ship[1]} />
    //         </li>
    //     )
    // })

    return (
        <div>
            <Link to="/battle">Begin Battle!</Link>
            <div style={{ display: "flex" }}>
                <AvailableShips ships={props.ships} addShip={props.addShip}/>
                <MyShips myShips={props.myShips} clearFleet={props.clearFleet}/>
            </div>
        </div>
    )
}

export default Assemble