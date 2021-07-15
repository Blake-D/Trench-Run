import { Link } from 'react-router-dom'
import AvailableShips from './AvailableShips'
import MyShips from './MyShips'

function Assemble(props) {
    // console.log(props)
    let availableShips = props.ships.map(ship => {
        return (
            <li>
                <img src={`https://swgoh.gg/${ship.image}`} id={`https://swgoh.gg/${ship.image}`} onClick={props.addShip} /><br></br>
                {/* {ship.name} */}
            </li>
        )
    })

    let myShips = props.myShips.map(ship => {
        return <li><img src={ship}/></li>
    })
    return (
        <div>
            <Link to="/battle">Begin Battle!</Link>
            <div style={{ display: "flex" }}>
                <AvailableShips availableShips={availableShips} />
                <MyShips myShips={myShips} />
            </div>
        </div>
    )
}

export default Assemble