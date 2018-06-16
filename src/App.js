import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'

class HomeView extends Component {
  render(){
    return(
      <section className="page--home">
        <h1 >HOME</h1>
      </section>
    )
  }
}

class AboutView extends Component {
  render(){
    return(
      <section className="page--about">
        <h1>About</h1>
      </section>
    )
  }
}

class DynamicView extends Component {
  render(){
    let usernameInRoute = this.props.match.params.uname
    return(
      <section className="page--dynamic" >
        <h1>UserName</h1>
        <hr/>
        <h2 className="username">{usernameInRoute}</h2>
      </section>
    )
  }
}

class Nav extends Component {
  render(){
    return (
      <nav>
        <h4>Site Nav</h4>
        <hr/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    )

  }
}

class NoMatch extends Component {
  render(){
    return (
      <section className="page--nomatch" >
        <h1>404 Sorry</h1>
      </section>
    )

  }
}

class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Switch>
            <Route exact path="/user/:uname/post/:postId" component={DynamicView}/>
            <Route exact path="/user/:uname" component={DynamicView}/>
            <Route exact path="/about" component={AboutView}/>
            <Route exact path="/" component={HomeView}/>
            <Route component={NoMatch}/>
          </Switch>

      </div>
    );
  }
}

export default App;
