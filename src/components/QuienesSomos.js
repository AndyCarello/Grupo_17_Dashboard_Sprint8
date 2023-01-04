import React from 'react';
import imagenFondo from '../assets/images/pasteleria.jpg';


function QuienesSomos(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Quienes Somos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>La historia de Sucré se remonta a fines de los años 70, cuando una amiga de Amelia le pidió
                            que la ayudara con lo que ella mejor sabía hacer: las tortas.
                            “NO EXISTE GRAN TALENTO SIN GRAN VOLUNTAD”(HONORÉ DE BALZAC)
                            Aunque ese primer emprendimiento no tuvo el éxito esperado, pensó: “Si puedo hacer las
                            tortas para ella, también puedo hacerlas para mí”. Y así salió a recorrer los cafés y
                            confiterías de la zona ofreciendo bandejas con pedacitos de tortas que con esmero preparaba
                            desde la cocina de su casa de Belgrano, sobre la calle O´Higgins. Y así, algo que nació como
                            un hobby, empezaba a vislumbrar un nuevo camino…</p>
                    <a className="btn btn-danger" target="_blank" rel="noreferrer" href="https://github.com/AndyCarello/Grupo_17_">Ir a la web Oficial</a>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;
