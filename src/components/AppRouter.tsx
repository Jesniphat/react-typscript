import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from '../containers/Hello';
import Hellos from './StatefulHello';

function Index(){
  return (
        <div>
          <h2>Index</h2>
        </div> 
  );
};

function Home(){
  return <h2>Home</h2>
}

function  About(){
  return <h2>About</h2>;
};

function Users (){
  return <h2>Users</h2>;
}

const routes: any[] = [
  {
    path: '/',
    component: Index,
    // exact: true
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/hellos',
    component: Hellos,
    name: 'jesse^^',
    enthusiasmLevel: 3
  },
  {
    path: '/hello',
    component: Hello
  }
];

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/hellos/">Hellos</Link>
            </li>
            <li>
              <Link to="/hello/">Hello</Link>
            </li>
          </ul>
        </nav>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            // component={route.component}
            render={props => (
              <route.component {...props} routes={route.routes} name={route.name} enthusiasmLevel={route.enthusiasmLevel} />
            )}
          />
        ))}
      </div>
    </Router>
  );
};
