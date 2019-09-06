import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import EmployeeDirectory from './Pages/EmployeeDirectory'
import NewEmployee from './Pages/NewEmployee'
import EmployeePage from './Pages/EmployeePage'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route
                exact
                path="/directory"
                component={EmployeeDirectory}
              ></Route>
              <Route exact path="/new-employee" component={NewEmployee}></Route>
              <Route
                exact
                path="/employee/:id"
                component={EmployeePage}
              ></Route>
            </Switch>
          </Router>
        </main>
      </>
    )
  }
}

export default App
