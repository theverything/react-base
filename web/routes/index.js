import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/smart/App';
import Hello from '../components/dumb/Hello';
import World from '../components/smart/World';

const FourOhFour = () => {
  return (
    <div style={{ color: 'white', textAlign: 'center', fontSize: 36 }}>
      404 not found
    </div>
  );
};

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Hello}/>
    <Route path='world' component={World}/>
    <Route path="*" component={FourOhFour}/>
  </Route>
);
