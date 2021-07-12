import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Title from './components/Title'
import Assemble from './components/Assemble'

function App() {
  return (
    <Router>
      <Route exact path='/' render={Title} />
      <Route path='/assemble' render={Assemble} />
    </Router>
  )
}

export default App