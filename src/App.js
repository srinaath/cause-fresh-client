import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from './routes';
import MegaNav from './components/mega-nav/mega-nav';
import './index.css';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <MegaNav />
        <div className="main-content">
          <Switch>
            {Routes.map((route, index) => (
              <Route key={'route' + index} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
