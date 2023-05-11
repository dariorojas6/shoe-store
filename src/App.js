import React from "react";
import Header from "./componentes/Header/index.jsx";
import  ProductosLista  from "./componentes/Productos/index.jsx";
import "boxicons";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductosLista/>
    </div>
  );
}

export default App;
