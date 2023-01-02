import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>{props.category.name}
                        {/* <ul>
                            {props.category.map( (category,i) => 
                                <li key={`category ${i}`}>{category.name}</li>
                            )}
                        </ul> */}
                    </td>
                    {/* <td>{props.Awards}</td> */}
                </tr>
            )
    }
    
export default ChartRow;