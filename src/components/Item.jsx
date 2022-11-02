import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <>
            <img src={producto.pictureUrl} width='200px' alt={producto.title} />
            <article>
                <h2>{producto.title}</h2>
                <h3>{producto.price}</h3>
                <Link to={`/itemdetail/${producto.id}`}></Link>
            </article>
        </>
    )
}

export default Item