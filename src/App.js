import React, { useEffect, useState, } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import './App.css'
import Title from './components/Title'
import Assemble from './components/Assemble'
import Battle from './components/Battle'
const axios = require('axios')

function App() {

  const [ships, setShips] = useState([])
  const [myShips, setMyShips] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(shipData => {
        setShips(shipData.data)
      })
  }, [])

  function addShip(e) {
    if (myShips.length < 5) {
      let tempMyShips = myShips
      tempMyShips.push(e.target.id)
      setMyShips(tempMyShips)
    } else {
      alert("Roster full")
    }
  }

  // const dynamicList = () => {
  //   console.log(myShips)
  //   return ships.filter(ship => !myShips.includes(ship))
  // }

  return (
    <div>
      <Router>
        <Route exact path='/' render={Title} />
        <Route path='/assemble' render={() => <Assemble addShip={addShip} ships={ships} />} />
        <Route path='/battle' render={() => <Battle myShips={myShips} /> } />
      </Router>
    </div>
  )
}

export default App