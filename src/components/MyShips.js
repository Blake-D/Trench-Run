function MyShips(props){
    return(
        <div>
            <h1>My Fleet</h1>
            <button onClick={props.clearFleet}>Clear Fleet</button>
            <ul>{props.myShips}</ul>
        </div>
    )
}

export default MyShips