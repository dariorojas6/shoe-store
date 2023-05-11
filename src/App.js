import React from 'react'
import { Header } from "./componentes/Header";
// import { Carrito } from "./componentes/Carrito";
// import { DataProvider } from './componentes/context/DataProvider.js';
import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from "react-router-dom"
// import Pages from "./componentes/Page.js";
import Inicio from "./componentes/page/inicio/index.js"
import "boxicons";

function App() {

  return (

    // <DataProvider>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Inicio}/>
          {/* <Route exact path="/productos" component={ProductosList}/> */}
        </Switch>
      </div>
    </Router>
    // </DataProvider >
  );
}

export default App;
