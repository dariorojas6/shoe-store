import React from 'react'
import { Header } from "./componentes/Header";
import { Carrito } from "./componentes/carrito/index.js";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./componentes/Page";
import "boxicons";
import { Toaster, toast } from 'react-hot-toast';


function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      </Router>
      <Toaster />
    </div>
    </DataProvider>
  );
}

export default App;
