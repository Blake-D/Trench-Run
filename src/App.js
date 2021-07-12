import React, { useEffect, useState, } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Title from './components/Title'
import Assemble from './components/Assemble'
const axios = require('axios')
const cors = require('cors')
const STAR_WARS_URL = process.env.STAR_WARS_URL

function App() {

  const [ships, setShips] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/')
    .then(shipData => {
      setShips(shipData.data)
    })
  }, [])

  console.log(ships)

  return (
    <Router>
      <Route exact path='/' render={Title} />
      <Route path='/assemble' render={() => <Assemble ships={ships} /> } />
    </Router>
  )
}

export default App