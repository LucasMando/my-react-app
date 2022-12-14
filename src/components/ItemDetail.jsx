import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({item}) => {
    const [cant, setCant] = useState(0)

    const {addToCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setCant(cantidad)
        addToCart(item, cantidad)
    }
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            {
                cant === 0 ? <ItemCount stock={10} initial={1} onAdd={onAdd}/> : <Link to="/cart">Ir al carrito</Link>
            }
        </div>
    )
}

export default ItemDetail