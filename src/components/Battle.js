function Battle(props) {
    return (
        <div id="battle-view">
            {props.myShips.map(ship => (
                <img className={"my-ship"} src={ship[1]} />
            ))}
        </div>
    )
}

export default Battle