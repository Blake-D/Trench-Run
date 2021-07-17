import Capitals from './Capitals'
import Attackers from './Attackers'
import Tanks from './Tanks'
import Support from './Support'

function AvailableShips(props) {
    return (
        <div>
            <Capitals ships={props.ships} addShip={props.addShip}/>
            <Attackers ships={props.ships} addShip={props.addShip} />
            <Tanks ships={props.ships} addShip={props.addShip} />
            <Support ships={props.ships} addShip={props.addShip} />
        </div>
    )
}

export default AvailableShips