import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
// pages
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'

// hoc
import Container from './hoc/Container'

const App = () => {
  return (
    <Container>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" exact to= '/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName={'abc-active'} to="/tasks">Tasks</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeStyle={{ color: 'gold' }} to="/about">About</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/tasks/:taskid' component={TasksPage}/>
        <Route path='/tasks/' component={TasksPage}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </Container>
  )
}

export default App
