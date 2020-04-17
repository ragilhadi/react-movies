import React, { Component } from "react";
import TopNav from "./components/header/TopNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./View/Home/Home";
import Movie from "./View/Movie/Movie";
import NotFound from "./View/NotFound/NotFound";

class App extends Component {


  render() {
    return (
      <BrowserRouter basename='/'>
        <React.Fragment>
          <TopNav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:movieId" component={Movie} exact />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
