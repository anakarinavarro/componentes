
import React from "react"

import Contacto from "./componentes/Contacto"
import Nosotros from "./componentes/Nosotros"
import Inicio from "./componentes/Inicio"
import Users from "./componentes/Users"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
  
} from "react-router-dom";



function App() {
  return (
  
    <Router>
      <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">Inicio</Link>
        <Link to="/nosotros" className="btn btn-dark">Nosotros</Link>
        <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">Contacto</NavLink>
      </div>
        <hr/>
      <Switch>
      
        <Route path="/nosotros/:id" exact>
          <Users/>
        </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
        <Route path="/" exact>
         <Inicio/>
        </Route>
      </Switch>
      </div>
   
      </Router>
  );
}

export default App;
