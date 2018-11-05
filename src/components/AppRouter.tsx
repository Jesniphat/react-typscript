import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from '../containers/Hello';

function Index(){
  return (
        <div>
          <h2>Index</h2>
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
                <Link to="/hello/">Hello</Link>
              </li>
            </ul>
          </nav>
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
    component: Index
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
    path: '/hello',
    component: Hello
  }
];

export default function AppRouter() {
  return (
    <Router>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            // render={props => (
            //   <route.component {...props} routes={route.routes} />
            // )}
          />
        ))}
      </div>
    </Router>
  );
};
