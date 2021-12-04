import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDeta from './CarDeta/CarDeta'

class App extends Component {
  
  state = {
    isLoggedin: false
  }

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
              to="/" 
              exact 
              activeClassName= {'wfn'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle = {{
                  color: 'blue'  
              }}
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: "/cars",
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr/>
        <div style = {{textAlign: 'center'}}>
            <h3>Is loggen in {this.state.isLoggedin ? 'TRUE' : 'FALSE'}</h3>
            <button onClick = {() => this.setState({isLoggedin: true})}>Login</button>
        </div>
        <hr/>
        <Switch>
          <Route path = '/' exact render =  {() => <h1>Home Page</h1>}/>
          {this.state.isLoggedin ? <Route path = '/about' component = {About}/> : null}
          <Route path = '/cars/:name' component = {CarDeta}/>
          <Route path = '/cars'   component = {Cars}/>
          <Redirect  to = {'/'}/>
        </Switch>
      </div>
    );
  }
}

export default App
