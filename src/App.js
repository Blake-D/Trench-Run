import React, { useEffect, useState, } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import './App.css'
import Title from './components/Title'
import Assemble from './components/Assemble'
import Battle from './components/Battle'
import { render } from '@testing-library/react'
const axios = require('axios')
// const cors = require('cors')
// const STAR_WARS_URL = process.env.STAR_WARS_URL

function App() {

  const [ships, setShips] = useState([])
  const [myShips, setMyShips] = useState([])
  const [redirect, setRedirect] = useState('/battle')

  // console.log(myShips)

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(shipData => {
        setShips(shipData.data)
      })
  }, [])

  function addShip(e) {
    if (myShips.length < 5) {
      let tempShips = myShips
      tempShips.push(e.target.id)
      setMyShips(tempShips)
      console.log(myShips)
    } else {
      alert("Roster full")
    }
  }

  // if(redirect){

  // }

  return (
    <div>
      <Router>
        <Route exact path='/' render={Title} />
        <Route path='/assemble' render={() => <Assemble ships={ships} addShip={addShip} />} />
        <Route  exact path='/battle' render={Battle} />
      </Router>
    </div>
  )
}

export default App