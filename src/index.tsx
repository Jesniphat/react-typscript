import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './components/Hello.css';
import registerServiceWorker from './registerServiceWorker';

// nolmal
// import Hello from './components/Hello';

// test redux
// import Hello from './containers/Hello';
import { Provider } from 'react-redux';

//test stats
// import Hello from './components/StatefulHello';

import { createStore } from 'redux';
import reducer from './reducers/index';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
