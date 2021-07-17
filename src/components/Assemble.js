import { Link } from 'react-router-dom'
import AvailableShips from './AvailableShips'
import MyShips from './MyShips'

function Assemble(props) {

    return (
        <div>
            <div id="begin-battle">
                <Link style={{ color: 'yellow'}} to="/battle">Begin Battle!</Link>
            </div>
            <div>
                <div id="my-ships">
                    <MyShips myShips={props.myShips} clearFleet={props.clearFleet} />
                </div><br></br>
                <button onClick={props.clearFleet}>Clear Fleet</button><br></br>
                <div id="available-ships" style={{ overflow: "scroll" }}>
                    <AvailableShips ships={props.ships} addShip={props.addShip} />
                </div>
            </div>
        </div>
    )
}

export default Assemble