import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import FoodMenu from './menu-food/FoodMenu';
import DrinkMenu from './menu-drink/DrinkMenu';
import WinesMenu from './menu-wines/WinesMenu';

import './App.css';





function App(props) {

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  // useEffect(() => props.history.listen(() => {
  //   setIsMenuOpen(false);
  // }));



  return (
    <Router>
      <div className="App">
        <div className='container-logo-dad'></div>
        <header className='menu-header'>
          <ul className='menu-list'>
            <li>
              <Link className='link-navbar' to='/'>Food</Link>
            </li>
            <li>
              <Link className='link-navbar' to='/drinks'>Drinks</Link>
            </li>
            <li>
              <Link className='link-navbar' to='/wines'>Wines</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path='/' component={FoodMenu}/>
              <Route exact path='/drinks' component={DrinkMenu}/>
              <Route exact path='/wines' component={WinesMenu}/>
            </Switch>
          </div>
        </header>
        
        {/* <div className="App-content">
          <FoodMenu />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
