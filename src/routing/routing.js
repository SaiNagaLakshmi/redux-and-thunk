import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './../component/home'
import Postlist from './../component/postlist'
import Counter from './../containerComponent/counter'
import Doubt from './../component/doubt'
import Table from './../containerComponent/table'


class Routing extends Component {
  render() {
    return (
       <div>
        <Router>
          <Switch>
            <Route exact ={true} path ='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/postlist' component={Postlist} />
            <Route path='/counter' component={Counter} />
            <Route path='/doubt' component={Doubt}/>
            <Route path='/table' component={Table} />
          </Switch>

        </Router>
      </div>
    )
  }
}
export default Routing