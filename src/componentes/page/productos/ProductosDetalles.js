import React, {useContext, useState, useEffect} from "react";
import {DataContext} from "../../../context/DataProvider";
import { useParams } from 'react-router-dom';


export default function ProductoDetalles(){
    const value = useContext(DataContext);
    const [producto] = value.productos;
    const params = useParams();
    
    console.log(params.id)

    return (
        <div>
            <h1>Detalle del producto</h1>
        </div>
    )
}