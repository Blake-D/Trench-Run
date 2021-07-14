function Battle(props){
    let myShips = props.myShips.map(ship => {
        return <li>{ship}</li>
    })
    return(
        <div>
            <ul>
                {myShips}
            </ul>
        </div>
    )
}

export default Battle