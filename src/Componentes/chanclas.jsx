import React from "react";

export function ListaChanclas(){
    return(

        <div class="card">
        <div class="card-header">
          Stock de Chanclas
        </div>
        <div class="card-body">
        <div class="table-responsive">
                <table class="table table-primary">
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
                        <tr class="">
                            <td scope="row">R1C1</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>

                        </tr>
                        <tr class="">
                            <td scope="row">Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>

                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
      </div>
            
            

    )  
}