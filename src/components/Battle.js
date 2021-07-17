function Battle(props){
    let myShips = props.myShips.map(ship => {
        return <li><img src={ship[1]}/></li>
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