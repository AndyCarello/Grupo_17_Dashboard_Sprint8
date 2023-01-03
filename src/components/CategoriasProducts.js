import React from "react";

export const CategoriasProducts = (props) => {

    // console.log(props)
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">{props.category.name} | Cantidad: {props.cant_prod}</div>
        </div>
      </div>
    </>
  );
};
