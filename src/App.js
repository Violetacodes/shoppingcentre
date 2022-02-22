import './App.css'
import React from "react";
import Maincenter from "./Maincenter";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";


function App() {
  return( 
   
    <div>
    <Router>
<nav>
  <Link to="/" className='link'>Home</Link>
 <Link to="/about" className="link">About</Link>
 <Link to="/shop" className="link">Shop</Link>
 <Link to="/contact" className="link">Contact</Link>
</nav>
<Routes>
  <Route path='/' element={<Maincenter/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/shop' element={<Shop/>}/>
 <Route path='/contact' element={<Contact/>}/>
</Routes>
</Router>
</div>

  )
 
}

export default App;


