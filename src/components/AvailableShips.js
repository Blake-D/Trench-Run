import Capitals from './Capitals'
import Attackers from './Attackers'
import Tanks from './Tanks'
import Support from './Support'

function AvailableShips(props) {
    // console.log(props)
    return (
        <div>
            <Capitals ships={props.ships} addShip={props.addShip}/>
            <Attackers ships={props.ships} addShip={props.addShip} />
            <Tanks ships={props.ships} addShip={props.addShip} />
            <Support ships={props.ships} addShip={props.addShip} />
        </div>
        // <div>
        //     {props.ships.map(ship => (
        //         <img
        //             src={`https://swgoh.gg/${ship.image}`}
        //             id={[ship.name, `https://swgoh.gg/${ship.image}`, ship.role, ship.power]}
        //             onClick={props.addShip}
        //         />
        //     ))}
        // </div>
    )
}

export default AvailableShips