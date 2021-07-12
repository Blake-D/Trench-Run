import React, { useEffect, useState, } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Title from './components/Title'
import Assemble from './components/Assemble'
const axios = require('axios')
const STAR_WARS_URL = process.env.STAR_WARS_URL

function App() {

  const [shipOptions, setShipOptions] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get('https://swapi.dev/api/starships/?page=1'),
      axios.get('https://swapi.dev/api/starships/?page=2'),
      axios.get('https://swapi.dev/api/starships/?page=3'),
      axios.get('https://swapi.dev/api/starships/?page=4')
    ]).then(resPlural => {
      let shipData = resPlural.map(resSing => {
        return resSing.data.results
      })
      setShipOptions([...shipOptions, shipData])
    }).catch(err => console.log(err))
  }, [])

  return (
    <Router>
      <Route exact path='/' render={Title} />
      <Route path='/assemble' render={Assemble} />
    </Router>
  )
}

export default App