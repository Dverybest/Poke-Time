import React from 'react';
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contant from './component/Contact'
import Post from './component/Post'
import { BrowserRouter, Route,Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contant} />
        <Route path ="/:post_id" component={Post}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
