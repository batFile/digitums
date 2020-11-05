import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/reducer.js';

import Header from './containers/Header.js';
import Main from './containers/Main.js';
import CBX_rey from './containers/pages/CBX_rey.js';
import DMFactory from './containers/pages/DMFactory.js';
import CEStrategies from './containers/pages/CEStrategies.js';
import DCTargeting from './containers/pages/DCTargeting.js';
import DISolutions from './containers/pages/DISolutions.js';
import Team from './containers/pages/Team.js';
import Footer from './containers/Footer.js';

const store = createStore (allReducers);

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/customer-base-x-rey" component={CBX_rey} />
              <Route path="/data-modeling-factory" component={DMFactory} />
              <Route path="/customer-engagement-strategies" component={CEStrategies} />
              <Route path="/digital-channel-targeting" component={DCTargeting} />
              <Route path="/digitum-it-solutions" component={DISolutions} />
              <Route path="/Team" component={Team} />
            </Switch>

          <Footer/>
        </BrowserRouter>
      </Provider>            
    );
}

export default App;
