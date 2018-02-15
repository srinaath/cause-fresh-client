import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import dotenv from 'dotenv';
import Routes from './routes';
import MegaNav from './components/mega-nav/mega-nav';
import './App.css';
process.env.NODE_ENV === 'production' ? dotenv.config({ path: './env-config/.env.prod' }) : dotenv.config({ path: './env-config/.env.dev' });



class App extends Component {
  componentDidMount() {

  }

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
