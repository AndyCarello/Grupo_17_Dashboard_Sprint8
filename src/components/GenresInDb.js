import React, { useEffect, useState } from "react";
import  {CategoriasProducts}  from "./CategoriasProducts";
import { UltimoCliente } from "./UltimoCliente";
import { UltimoProducto } from "./UltimoProducto";

function GenresInDb() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointUsers = "http://localhost:3000/api/products";
    fetch(endpointUsers)
      .then((response) => response.json())
      .then((data) => setProducts(data.categorias))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Nuestras Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              products.map( ( row , i) => {
                return <CategoriasProducts { ...row} key={i}/>
            })
            }
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default GenresInDb;
