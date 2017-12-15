import React, { Component } from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';

import HomeContainer from './containers/home/home-container';
import Error500Container from './containers/error/error-500-container';
import Routes from './routes';


import MegaNav from './components/mega-nav/mega-nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MegaNav />
        <BrowserRouter>
        <div className="main-content">
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path="/error/500" component={Error500Container} />
            <Route path="/" component={HomeContainer} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
