import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRow(){

    // traer las api de users
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
    
	// traer las api users
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3000/api/users';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setUsers(data) )
				.catch(error => console.log(error))
	}, [])

	// traer las api products
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3000/api/products';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => {
                    data.categorias = data.categorias.length;
                    setProducts(data);
                } )
				.catch(error => console.log(error))
	}, [])

    /*  Cada set de datos es un objeto literal */
    let clientesInDB = {
        title: 'Clientes',
        color: 'primary', 
        cuantity: users.count,
        icon: 'fa-clipboard-list'
    }
    
    let totalProducts = {
        title:' Productos', 
        color:'success', 
        cuantity: products.count,
        icon:'fa-award'
    }
    
    let sociosQuantity = {
        title:'Categorias' ,
        color:'warning',
        cuantity: products.categorias || '2',
        icon:'fa-user-check',
    }

    let cartProps = [clientesInDB, totalProducts, sociosQuantity];

    return (
    
        <div className="row">
            {cartProps.map( (movie, i) => {
                return <SmallCard {...movie} key={i}/>
            })}
        </div>
    )
}

export default ContentRow;