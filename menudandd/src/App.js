import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import FoodMenu from './menu-food/FoodMenu';
import DrinkMenu from './menu-drink/DrinkMenu';
import WinesMenu from './menu-wines/WinesMenu';
import SoftsMenu from './menu-drink/SoftsMenu';
import SpiritsMenu from './menu-drink/SpiritsMenu';

import './App.css';





function App(props) {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Router>
      <div className="App">
        <div className='container-logo-dad'></div>
        <header className='menu-header'>
          <ul className='menu-list'>
            <li>
              <Link className='link-navbar' to='/'>Food</Link>
            </li>
            <div className='sep-nav'>|</div>
            <li>
              <Link className='link-navbar' to='/wines'>Wines</Link>
            </li>
            <div className='sep-nav'>|</div>
            <li>
              <Link className='link-navbar' to='/cocktails'>Cocktails</Link>
            </li>
            <div className='sep-nav'>|</div>
            <li>
              <Link className='link-navbar' to='/softs'>Softs</Link>
            </li>
            <div className='sep-nav'>|</div>
            <li>
              <Link className='link-navbar' to='/spirits'>Spirits</Link>
            </li>
          </ul>
          </header>
          <div>
            <Switch>
              <Route exact path='/' component={FoodMenu}/>
              <Route exact path='/wines' component={WinesMenu}/>
              <Route exact path='/cocktails' component={DrinkMenu}/>
              <Route exact path='/softs' component={SoftsMenu}/>
              <Route exact path='/spirits' component={SpiritsMenu}/>
            </Switch>
          </div>
        
        <footer className='footer-menu'>
          <div className='corto-maltese-quote'>"Ce serait bon de vivre une fable"
            <br/>
            <p>- Corto Maltese</p>
          </div>
          <div className='sep-footer-elements'></div>
          <button className='button-back-to-top' onClick={scrollTop}>TOP &#128770;</button>
        </footer>
      </div>
    </Router>
  );
}

export default App;
