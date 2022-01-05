import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import './App.css';

const HatsPage=()=>(
  <div>
    Hats!
  </div>
)
const JacketsPage=()=>(
  <div>
    Jacket!
  </div>
)
const SneakersPage=()=>(
  <div>
    Sneakers!
  </div>
)
const WomensPage=()=>(
  <div>
    Womens!
  </div>
)
const MensPage=()=>(
  <div>
    Mens!
  </div>
)

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={HatsPage}/>
      <Route path='/shop/jackets' component={JacketsPage}/>
      <Route path='/shop/sneakers' component={SneakersPage}/>
      <Route path='/shop/womens' component={WomensPage}/>
      <Route path='/shop/mens' component={MensPage}/>
    </div>
  );
}

export default App;
