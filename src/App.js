// import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Pools from './components/pages/Pools';
import Fuse from './components/pages/Fuse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
   <>

     <Router>

     <Navbar />


       <Switch>
         <Route exact path="/">
          <Home />
         </Route>
         <Route path="/pools">
           <Pools/>
         </Route>
         <Route path="/fuse">
          <Fuse/>
         </Route>
       </Switch>

     </Router>


    
   </>
  );
}

export default App;
