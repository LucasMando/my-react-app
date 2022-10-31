import React from 'react'

const Item = ({producto}) => {
    return (
        <>
            <img src={producto.pictureUrl} width='200px' alt={producto.title} />
            <article>
                <h2>{producto.title}</h2>
                <h3>{producto.price}</h3>
            </article>
        </>
    )
}

export default Item