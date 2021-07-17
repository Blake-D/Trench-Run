import { Link } from 'react-router-dom'

function Title(){
    return(
        <div>
            <h1>Star Wars: Trench Run</h1><br></br>
            <Link style={{color: 'yellow'}} to='/assemble'>Assemble Your Fleet!</Link>
        </div>
    )
}

export default Title