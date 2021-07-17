import React, { useEffect, useState, } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './App.css'
import Title from './components/Title'
import Assemble from './components/Assemble'
import Battle from './components/Battle'
const axios = require('axios')

function App() {

  const [ships, setShips] = useState([])
  const [myShips, setMyShips] = useState([])

  useEffect(() => {
    axios.get('/api/ships')
      .then(shipData => {
        setShips(shipData.data)
      })
  }, [])

  function checkForSub(arr, subArr) {
    if ((arr.toString()).indexOf(subArr.toString()) > -1) {
      return true
    } else {
      return false
    }
  }

  function addShip(e) {
    let attributes = e.target.id.split(",")
    if (myShips.length < 5) {
      if(checkForSub(myShips, attributes)){
        alert('Ship already in fleet')
      } else{
        let tempMyShips = myShips
        tempMyShips.push(attributes)
        setMyShips(tempMyShips)
        let tempShips = []
        for(let i = 0; i < ships.length; i++){
          if(!myShips.includes(ships[i])){
            tempShips.push(ships[i])
          }
        }
        setShips(tempShips)
      }
    } else {
      alert("Roster Full")
    }
  }

  function clearFleet(e){
    setMyShips([])
  }

  return (
    <div>
      <Router>
        <Route exact path='/' render={Title} />
        <Route path='/assemble' render={() => <Assemble addShip={addShip} clearFleet={clearFleet} ships={ships} myShips={myShips} />} />
        <Route path='/battle' render={() => <Battle myShips={myShips} /> } />
      </Router>
    </div>
  )
}

export default App