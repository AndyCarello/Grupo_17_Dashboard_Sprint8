import React from 'react';
import { useState, useEffect } from 'react';
import ChartRow from './ChartRow';


function Chart (){
	// const [users, setUsers] = useState([]);

	const [products, setProducts] = useState([]);

	// traer las api users
	// useEffect(() => {
	// 	// Petición Asincrónica al montarse el componente
	// 	const endpointUsers = 'http://localhost:3000/api/users';
	// 		fetch(endpointUsers)
	// 			.then(response => response.json())
	// 			.then( data => setUsers(data.rows) )
	// 			.catch(error => console.log(error))
	// }, [])

	// traer las api products
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3000/api/products';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setProducts(data.rows) )
				.catch(error => console.log(error))
	}, []);

    console.log(products)

    // console.log(users.rows[1].name);
    // console.log(products);

    // let tableRowsData = [
    //     {
    //         Title: 'Billy Elliot ',
    //         Length: '123',
    //         Rating: '5',
    //         Categories: ['Drama','Comedia'],
    //         Awards: 2
    //     },
    //     {
    //         Title: 'Alicia en el país de las maravillas',
    //         Length: '142',
    //         Rating: '4.8',
    //         Categories: ['Drama','Acción','Comedia'],
    //         Awards: 3
    //     }, 
    // ]

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                {/* <th>Premios</th> */}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                {/* <th>Premios</th> */}
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;