import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './components/Hello.css';
import registerServiceWorker from './registerServiceWorker';

// nolmal
// import Hello from './components/Hello';

// test redux
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

//test stats
// import Hello from './components/StatefulHello';

import { createStore } from 'redux';
import reducer from './reducers/index';
// import { StoreState } from './types/index';

const store = createStore(reducer);

// ReactDOM.render(
//   <Hello name='TypeScript' enthusiasmLevel={10} />,
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
