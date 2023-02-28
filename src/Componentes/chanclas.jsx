import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../Servicios/Servicios'


export function     ListaChanclas(){

    const [chancla, setChanclas] = useState([]);

    useEffect(()=>{
        API.chanclas().then(setChanclas)
    },[])
    
    return(

        <div className="card">
        <div className="card-header">
        Stock Chanclas
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Talle</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chancla.map((chanclas)=>(
                        <tr className="">
                            <td scope="row">{chanclas.idchanclas}</td>
                            <td>{chanclas.Talle}</td>
                            <td>{chanclas.Cantidad}</td>
                            <td>{chanclas.Color}</td>
                            <td>{chanclas.Estado}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}