import { Link } from 'react-router-dom'
import AvailableShips from './AvailableShips'
import MyShips from './MyShips'

function Assemble(props){
    // console.log(props)
    let availableShips = props.ships.map(ship => {
        return <li id={ship.name} onClick={props.addShip}>{ship.name}</li>
    })

    let myShips = props.myShips.map(ship => {
        return <li>{ship}</li>
    })
    return(
        <div>
            <Link to="/battle">Begin Battle!</Link>
            <AvailableShips availableShips={availableShips}/>
            <MyShips myShips={myShips} />
        </div>
    )
}

export default Assemble