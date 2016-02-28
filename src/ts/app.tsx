'use strict';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import * as React from 'react';
import {render} from 'react-dom';
import {App, About, GeneratorApp} from './view';

//import CSS
import '../css/style.styl';

render(
  <Router history={browserHistory}>
      <Route path='/' component={App}>
          <IndexRoute component={GeneratorApp} />
          <Route path='/about' component={About}></Route>
      </Route>
  </Router>,
  document.querySelector('#app')
);
